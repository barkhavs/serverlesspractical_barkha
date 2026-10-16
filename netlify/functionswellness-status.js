exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "success",
      message: "GlowCare is ready! Your wellness service is running successfully."
    })
  };
};
