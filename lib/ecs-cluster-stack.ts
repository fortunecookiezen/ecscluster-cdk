import cdk = require('@aws-cdk/cdk');
import ec2 = require('@aws-cdk/aws-ec2');
import ecs = require('@aws-cdk/aws-ecs');
import ecs_patterns = require('@aws-cdk/aws-ecs-patterns');

export class EcsClusterStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // discover existing vpc by name
    const vpc = ec2.Vpc.fromLookup(this, 'vpc', {
      vpcName: 'Vpc3Stack/vpc'
    });
    // create ecs cluster
    const cluster = new ecs.Cluster(this, 'DevCluster', {
      vpc: vpc
    });
    // create fargate service
    const fargateservice = new ecs_patterns.LoadBalancedFargateService(this, 'FargateService', {
      cluster: cluster,
      desiredCount: 2,
      enableLogging: true,
      image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
      publicLoadBalancer: true
    });
    //add tags
    cluster.node.applyAspect(new cdk.Tag('Owner', 'phillips.james@gmail.com'));
    cluster.node.applyAspect(new cdk.Tag('Environment', 'dev'));
    fargateservice.node.applyAspect(new cdk.Tag('Owner', 'phillips.james@gmail.com'));
    fargateservice.node.applyAspect(new cdk.Tag('Environment', 'dev'));
  }
}
