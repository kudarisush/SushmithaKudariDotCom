terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.18"
    }
  }
  required_version = ">= 1.2.0"

  backend "s3" {
    bucket = "kudarisush-tfstate-0101"
    key = "state/terraform.tfstate"
    region = "us-east-1"
    encrypt = true
  }
}

provider "aws" {
  region  = var.aws_region
}

# locals {
#   availability_zones = ["${var.aws_region}a", "${var.aws_region}b"]
# }
#
# resource "aws_vpc" "vpc" {
#   cidr_block           = var.vpc_cidr
#   enable_dns_hostnames = true
#   enable_dns_support   = true
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "${var.environment}-vpc"
#     Environment   = var.environment
#     Manager       = "terraform"
#   }
# }
#
# resource "aws_subnet" "public_subnet" {
#   vpc_id                  = aws_vpc.vpc.id
#   count                   = length(var.public_subnets_cidr)
#   cidr_block              = element(var.public_subnets_cidr, count.index)
#   availability_zone       = element(local.availability_zones, count.index)
#   map_public_ip_on_launch = true
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "${var.environment}-${element(local.availability_zones, count.index)}-public-subnet"
#     Environment   = var.environment
#     Manager       = "terraform"
#   }
# }
#
# resource "aws_subnet" "private_subnet" {
#   vpc_id                  = aws_vpc.vpc.id
#   count                   = length(var.private_subnets_cidr)
#   cidr_block              = element(var.private_subnets_cidr, count.index)
#   availability_zone       = element(local.availability_zones, count.index)
#   map_public_ip_on_launch = false
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "${var.environment}-${element(local.availability_zones, count.index)}-private-subnet"
#     Environment   = var.environment
#     Manager       = "terraform"
#   }
# }
#
# resource "aws_internet_gateway" "ig" {
#   vpc_id = aws_vpc.vpc.id
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "${var.environment}-igw"
#     Environment   = var.environment
#     Manager       = "terraform"
#
#   }
# }
#
# resource "aws_eip" "nat_eip" {
#   vpc        = true
#   depends_on = [aws_internet_gateway.ig]
# }
#
# resource "aws_nat_gateway" "nat" {
#   allocation_id = aws_eip.nat_eip.id
#   subnet_id     = element(aws_subnet.public_subnet.*.id, 0)
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "nat-gateway-${var.environment}"
#     Environment   = var.environment
#     Manager       = "terraform"
#   }
# }
#
# resource "aws_route_table" "private" {
#   vpc_id = aws_vpc.vpc.id
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "${var.environment}-private-route-table"
#     Environment   = var.environment
#     Manager       = "terraform"
#   }
# }
#
# resource "aws_route_table" "public" {
#   vpc_id = aws_vpc.vpc.id
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "${var.environment}-public-route-table"
#     Environment   = var.environment
#     Manager       = "terraform"
#   }
# }
#
# resource "aws_route" "public_internet_gateway" {
#   route_table_id         = aws_route_table.public.id
#   destination_cidr_block = "0.0.0.0/0"
#   gateway_id             = aws_internet_gateway.ig.id
# }
#
# resource "aws_route" "private_internet_gateway" {
#   route_table_id         = aws_route_table.private.id
#   destination_cidr_block = "0.0.0.0/0"
#   gateway_id             = aws_nat_gateway.nat.id
# }
#
# resource "aws_route_table_association" "public" {
#   count          = length(var.public_subnets_cidr)
#   subnet_id      = element(aws_subnet.public_subnet.*.id, count.index)
#   route_table_id = aws_route_table.public.id
# }
#
# resource "aws_route_table_association" "private" {
#   count          = length(var.private_subnets_cidr)
#   subnet_id      = element(aws_subnet.private_subnet.*.id, count.index)
#   route_table_id = aws_route_table.private.id
# }
#
# data "aws_ec2_managed_prefix_list" "cloudfront_prefix_list" {
#   name = "com.amazonaws.global.cloudfront.origin-facing"
# }
#
# resource "aws_security_group" "app_sg" {
#   name        = "app-security-group-alb"
#   description = "Security group for the ${var.application} app"
#   vpc_id      = aws_vpc.vpc.id
#
#   ingress {
#     description = "Allow all traffic through port 3000"
#     from_port   = 3000
#     to_port     = 3000
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
#
#   ingress {
#     description = "Allow all traffic through port 80"
#     from_port   = 80
#     to_port     = 80
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
#
#   egress {
#     description = "Allow all outbound traffic"
#     from_port   = "0"
#     to_port     = "0"
#     protocol    = "-1"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "${var.environment}-security-group"
#     Environment   = var.environment
#     Manager       = "terraform"
#   }
# }
#
# resource "aws_vpc_security_group_ingress_rule" "https" {
#   description       = "Allow all traffic on port 443 from CloudRun"
#   from_port         = 443
#   to_port           = 443
#   ip_protocol          = "tcp"
#   security_group_id = aws_security_group.app_sg.id
#   prefix_list_id = data.aws_ec2_managed_prefix_list.cloudfront_prefix_list.id
# }
#
# resource "aws_lb" "app_alb" {
#   name               = "app-alb"
#   internal           = false
#   load_balancer_type = "application"
#   security_groups    = [aws_security_group.app_sg.id]
#   subnets            = aws_subnet.public_subnet[*].id
#
#   enable_deletion_protection = false
#
#   enable_http2 = true
#
#   enable_cross_zone_load_balancing = true
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "${var.environment}-load-balancer"
#     Environment   = var.environment
#     Manager       = "terraform"
#   }
# }
#
# resource "aws_lb_target_group" "app_target_group" {
#   name        = "app-target-group"
#   target_type = "ip"
#   port        = 80
#   protocol    = "HTTP"
#   vpc_id      = aws_vpc.vpc.id
#
#   health_check {
#     enabled             = true
#     interval            = 300
#     path                = "/"
#     port                = "traffic-port"
#     protocol            = "HTTP"
#     timeout             = 5
#     unhealthy_threshold = 2
#   }
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "${var.environment}-target-group"
#     Environment   = var.environment
#     Manager       = "terraform"
#   }
# }
#
# resource "aws_lb_listener_certificate" "lb_listener_cert" {
#   listener_arn    = aws_lb_listener.app_listener_https.arn
#   certificate_arn = aws_acm_certificate.cert.arn
# }
#
# resource "aws_lb_listener" "app_listener_https" {
#   load_balancer_arn = aws_lb.app_alb.arn
#   port = 443
#   protocol = "HTTPS"
#   certificate_arn = ""
#
#   default_action {
#     type = "fixed-response"
#
#     fixed_response {
#       content_type = "text/plain"
#       status_code  = "403"
#     }
#   }
#
#   tags = {
#     Organization  = var.organization
#     Application   = var.application
#     Name          = "${var.environment}-load-balance-listener"
#     Environment   = var.environment
#     Manager       = "terraform"
#   }
# }
#
# resource "aws_lb_listener_rule" "app_listener_rule" {
#   listener_arn = aws_lb_listener.app_listener_https.arn
#
#   action {
#     type             = "forward"
#     target_group_arn = aws_lb_target_group.app_target_group.arn
#   }
#
#   // TODO why isn't cloud front sending host header?
#   #  condition {
#   #    host_header {
#   #      values = [
#   #        aws_route53_record.websiteurl.name
#   #      ]
#   #    }
#   #  }
#
#   condition {
#     http_header {
#       http_header_name = "X-Allow"
#       values           = [random_id.cloudfront_header.hex]
#     }
#   }
# }
#
# resource "aws_ecr_repository" "ecr_repo" {
#   name = "ecs-${var.application}"
#   force_delete = true
# }
#
# locals {
#   repo_endpoint = split("/", aws_ecr_repository.ecr_repo.repository_url)[0]
# }
#
# resource "null_resource" "build_and_push_image" {
#
#   provisioner "local-exec" {
#     command = <<EOF
#       set -ex
#       echo "--- Build image ---"
#       aws ecr get-login-password --region ${var.aws_region} | \
#       docker login --username AWS --password-stdin ${local.repo_endpoint} && \
#       docker build -t ecs-${var.application} . --platform linux/amd64 && \
#       docker tag ecs-${var.application}:latest ${aws_ecr_repository.ecr_repo.repository_url}:latest
#       docker push ${aws_ecr_repository.ecr_repo.repository_url}:latest
#       EOF
#   }
# }
#
# resource "aws_ecs_cluster" "app_cluster" {
#   name = "${var.application}-cluster"
# }
#
# resource "aws_ecs_task_definition" "app_task" {
#   family                   = "${var.application}-task"
#   network_mode             = "awsvpc"
#   requires_compatibilities = ["FARGATE"]
#   cpu                      = "256"
#   memory                   = "512"
#
#   execution_role_arn = aws_iam_role.ecs_execution_role.arn
#
#   container_definitions = jsonencode([
#     {
#       name  = "${var.application}-container",
#       image = "${aws_ecr_repository.ecr_repo.repository_url}",
#       portMappings = [
#         {
#           containerPort = 3000,
#           hostPort      = 3000,
#         },
#       ],
#     },
#   ])
# }
#
# data "aws_iam_policy" "aws_ecs_task_execution_policy" {
#   arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
# }
#
# resource "aws_iam_policy" "policy" {
#   name     = "ecs-Policy"
#   policy   = jsonencode({
#     "Version": "2012-10-17",
#     "Statement": [
#       {
#         "Sid": "",
#         "Effect": "Allow",
#         "Action": [
#           "ecs:ListClusters",
#           "ecs:ListTaskDefinitions",
#           "ecs:ListContainerInstances",
#           "ecs:RunTask",
#           "ecs:StopTask",
#           "ecs:DescribeTasks",
#           "ecs:DescribeContainerInstances",
#           "ecs:DescribeTaskDefinition",
#           "ecs:RegisterTaskDefinition",
#           "ecs:DeregisterTaskDefinition",
#           "iam:GetRole",
#           "iam:PassRole"
#         ],
#         "Resource": "*"
#       }
#     ]
#   })
# }
#
# resource "aws_iam_role" "ecs_execution_role" {
#   name = "ecs-execution-role"
#
#   assume_role_policy = jsonencode({
#     Version = "2012-10-17",
#     Statement = [
#       {
#         Action = "sts:AssumeRole",
#         Effect = "Allow",
#         Principal = {
#           Service = "ecs-tasks.amazonaws.com",
#         },
#       },
#     ],
#   })
#
#   managed_policy_arns = [
#     data.aws_iam_policy.aws_ecs_task_execution_policy.arn,
#     aws_iam_policy.policy.arn
#   ]
# }
#
# resource "aws_ecs_service" "app_service" {
#   name            = "${var.application}-service"
#   cluster         = aws_ecs_cluster.app_cluster.id
#   task_definition = aws_ecs_task_definition.app_task.arn
#   launch_type     = "FARGATE"
#   desired_count   = 2
#
#   network_configuration {
#     subnets = aws_subnet.private_subnet[*].id
#     security_groups = [aws_security_group.app_sg.id]
#   }
#
#   load_balancer {
#     target_group_arn = aws_lb_target_group.app_target_group.arn
#     container_name   = "${var.application}-container"
#     container_port   = 3000
#   }
#
#   depends_on = [aws_lb_listener.app_listener_https, aws_iam_policy.policy]
# }
#
# # data source to fetch hosted zone info from domain name:
# data "aws_route53_zone" "hosted_zone" {
#   name = var.domain_name
# }
#
# locals {
#   tags = {
#     Organization = var.organization
#     Application  = var.application
#     Manager      = "terraform"
#   }
# }
#
# # generate ACM cert for domain :
# resource "aws_acm_certificate" "cert" {
#   domain_name               = "staging.${var.domain_name}"
#   subject_alternative_names = ["staging.${var.domain_name}"]
#   validation_method         = "DNS"
#   tags                      = local.tags
# }
#
# # validate cert:
# resource "aws_route53_record" "certvalidation" {
#   for_each = {
#     for d in aws_acm_certificate.cert.domain_validation_options : d.domain_name => {
#       name   = d.resource_record_name
#       record = d.resource_record_value
#       type   = d.resource_record_type
#     }
#   }
#   allow_overwrite = true
#   name            = each.value.name
#   records         = [each.value.record]
#   ttl             = 60
#   type            = each.value.type
#   zone_id         = data.aws_route53_zone.hosted_zone.zone_id
# }
#
# resource "aws_acm_certificate_validation" "certvalidation" {
#   certificate_arn         = aws_acm_certificate.cert.arn
#   validation_record_fqdns = [for r in aws_route53_record.certvalidation : r.fqdn]
# }
#
# # creating A record for cloudfront domain:
# resource "aws_route53_record" "websiteurl" {
#   name    = "staging.${var.domain_name}"
#   zone_id = data.aws_route53_zone.hosted_zone.zone_id
#   type    = "A"
#   alias {
#     name                   = aws_cloudfront_distribution.cf_dist.domain_name
#     zone_id                = aws_cloudfront_distribution.cf_dist.hosted_zone_id
#     evaluate_target_health = true
#   }
# }
#
# resource "random_id" "cloudfront_header" {
#   byte_length = 16
# }
#
# data "aws_cloudfront_origin_request_policy" "origin_request_policy" {
#   id = "216adef6-5c7f-47e4-b989-5492eafa07d3" // AllViewer
# }
#
# data "aws_cloudfront_cache_policy" "cache_policy" {
#   id = "658327ea-f89d-4fab-a63d-7e88639e58f6"
# }
#
# #creating Cloudfront distribution :
# resource "aws_cloudfront_distribution" "cf_dist" {
#   enabled             = true
#   aliases             = ["staging.${var.domain_name}"]
#   origin {
#     domain_name = aws_lb.app_alb.dns_name
#     origin_id   = aws_lb.app_alb.dns_name
#     custom_origin_config {
#       http_port              = 80
#       https_port             = 443
#       origin_protocol_policy = "https-only"
#       origin_ssl_protocols   = ["TLSv1.2"]
#     }
#     # Some magic header between cloudfront and the alb
#     # The alb will only allow traffic containing this header.
#     # the random_id should be considered secret.
#     custom_header {
#       name = "X-Allow"
#       value = random_id.cloudfront_header.hex
#     }
#   }
#   default_cache_behavior {
#     allowed_methods        = ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
#     cached_methods         = ["GET", "HEAD", "OPTIONS"]
#     target_origin_id       = aws_lb.app_alb.dns_name
#     viewer_protocol_policy = "redirect-to-https"
#
#     origin_request_policy_id = data.aws_cloudfront_origin_request_policy.origin_request_policy.id
#     cache_policy_id          = data.aws_cloudfront_cache_policy.cache_policy.id
#   }
#   restrictions {
#     geo_restriction {
#       restriction_type = "whitelist"
#       locations        = ["US"]
#     }
#   }
#   tags = local.tags
#   viewer_certificate {
#     acm_certificate_arn      = aws_acm_certificate.cert.arn
#     ssl_support_method       = "sni-only"
#     minimum_protocol_version = "TLSv1.2_2018"
#   }
# }
#

// Only cloudfront should be able to access the alb
// ecs task should have envvars deployed