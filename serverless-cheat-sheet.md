# Create a serverless project for Node.js within AWS Lambda
serverless create --template aws-nodejs

# Create AWS credentials file in ~/.aws
serverless config credentials --provider aws --key <access-key-id> --secret <secret> --profile <profilename>

# Deploy functions from serverless.yml to AWS Lambda
sls deploy

# Debug level output
SLS_DEBUG="*" sls deploy

# Invoke function
sls invoke -f <function-name-in-serverless.yml>

# Show logs of a function
serverless logs -f <function-name-in-serverless.yml>

# Tail logs of a function
serverless logs -f <function-name-in-serverless.yml> --tail

# Sample config for an Alexa AWS function
service: serverless-alexa-aws-test # resulting function name in AWS Lambda

provider:
  name: aws
  runtime: nodejs6.10
  stage: dev
  region: eu-west-1 # Ireland
  profile: my-aws-credentials-profile

functions:
  alexatestskill:
    handler: handler.alexatestskill
    events:
      - alexaSkill

package:
  exclude:
    - node_modules/**