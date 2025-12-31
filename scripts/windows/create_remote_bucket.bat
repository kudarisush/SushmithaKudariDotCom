@echo off

REM BUCKET_NAME and REGION should be defined as ENV variables
set BUCKET_NAME=kudarisush-tfstate-0101
set REGION=us-east-1


REM Check if the bucket exists
aws s3api head-bucket --bucket %BUCKET_NAME% 2> nul
if errorlevel 1 (
    REM Bucket does not exist, create it
    aws s3api create-bucket --bucket %BUCKET_NAME% --region %REGION%
    if errorlevel 1 (
        echo Failed to create bucket %BUCKET_NAME%.
        exit /b 1
    ) else (
        echo Bucket %BUCKET_NAME% created.
    )
) else (
    echo Bucket %BUCKET_NAME% already exists.
)