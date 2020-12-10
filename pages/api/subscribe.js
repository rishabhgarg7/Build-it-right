export default async(req, res) => {

  const { email, tags } = req.body;
  if (!email) {
     return res.status(400).json({ error: "Email is required" }) ;
  }

  try {
    const endpoint = `${process.env.CONVERTKIT_API_URL}/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({"api_key": process.env.CONVERTKIT_API_KEY, "email": email, "tags": tags })});
  
    if (response.status >=400){
      const errorMessage = (response && response.message) || response.statusText;
      return res.status(400).json({error:`Something went wrong while subscribing to API: ${errorMessage}`})
    }
  
    res.status(201).json({'message':'Subscribed.'})

  } catch(error){
    return res.status(400).json({error:`Something went wrong. Error: ${error}`})
  }


};