# Deploy a fargate cluster into an existing vpc using aws-cdk

Deploy a fargate cluster into an existing vpc using [AWS Cloud Development Kit](https://docs.aws.amazon.com/cdk/latest/guide/home.html)

## What it does

* discover existing vpc using vpc name
* create ecs cluster
* deploy fargate task

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
