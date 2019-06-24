#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { EcsClusterStack } from '../lib/ecs-cluster-stack';

const app = new cdk.App();
new EcsClusterStack(app, 'EcsClusterStack');
