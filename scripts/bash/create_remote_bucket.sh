#!/bin/bash

# BUCKET_NAME and REGION should be defined as ENV variables
BUCKET_NAME="kudarisush-tfstate-0101"
REGION="us-east-1"

# Check if the bucket exists
if aws s3api head-bucket --bucket "$BUCKET_NAME" 2> /dev/null; then
    echo "Bucket $BUCKET_NAME already exists."
else
    # Bucket does not exist, create it
    if ! aws s3api create-bucket --bucket "$BUCKET_NAME" --region "$REGION"; then
        echo "Failed to create bucket $BUCKET_NAME."
        exit 1
    else
        echo "Bucket $BUCKET_NAME created."
    fi
fi