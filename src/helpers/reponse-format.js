const APIError = (message, status = 500) => {
  this.message = message;
  this.status = status;
};

export default APIError;
