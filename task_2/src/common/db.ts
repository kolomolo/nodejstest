import { DynamoDB } from "aws-sdk";

const dbClient = new DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: "eu-west-1",
  ...(process.env.MOCK_DYNAMODB_ENDPOINT && {
    endpoint: process.env.MOCK_DYNAMODB_ENDPOINT,
    sslEnabled: false,
    region: "local",
  }),
});

const TableNames = {
  users: "users",
  groups: "groups",
  resources: "resources",
};

export { dbClient, TableNames };
