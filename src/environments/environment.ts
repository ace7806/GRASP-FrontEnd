export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',  // Your development API URL
  cognitoConfig: {
    userPoolId: 'us-west-2_4he9oppIC',
    clientId: '4e7edvk2hpk7vkt5fk4soed8r'
  },
  GETGASSTATIONS : "https://6jf7u35vyl.execute-api.us-west-2.amazonaws.com/NP/getgasstations",
  UPDATEGASPRICE: "https://6jf7u35vyl.execute-api.us-west-2.amazonaws.com/NP/updategasprice",
  GETCLOSESTGASSTATION: "https://6jf7u35vyl.execute-api.us-west-2.amazonaws.com/NP/getcloseststation",
  GETADMINS: "https://6jf7u35vyl.execute-api.us-west-2.amazonaws.com/NP/getadmins",
  UPDATERATINGS: "https://6jf7u35vyl.execute-api.us-west-2.amazonaws.com/NP/stations/rating"
};
