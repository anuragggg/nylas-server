export default (req, res) => {
    if (req.method === "GET" && req.query.challenge) {
        console.log(`Received challenge: ${req.query.challenge}`);
        return res.send(req.query.challenge);
    } 
    
    if (req.method === "POST") {
        console.log("====== Webhook Event Received ======");
        console.log("Full Request Body:", JSON.stringify(req.body, null, 2)); // Log the full JSON body
        console.log("====== End of Webhook Event ======\n");
        
        // Responding to avoid retries
        return res.status(200).json({ message: "Webhook received successfully" });
    } 
    
    res.status(405).json({ error: "Method Not Allowed" });
};
