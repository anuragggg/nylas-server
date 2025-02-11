export default (req, res) => {
    // Handle GET request for webhook verification
    if (req.method === "GET" && req.query.challenge) {
        console.log(`Received challenge code: ${req.query.challenge}`);
        console.log(`Now returning challenge code: ${req.query.challenge}`);

        // Respond with challenge to verify the webhook
        res.send(req.query.challenge);
    }
    // Handle POST request for webhook events
    else if (req.method === "POST") {
        console.log("====== Message Updated Start ======");
        
        // Logging received webhook data
        if (req.body?.deltas) {
            req.body.deltas.forEach(delta => console.log(JSON.stringify(delta, null, 2)));
        }

        console.log("====== Message Updated End ======\n");

        // Responding to Nylas to prevent retries
        res.status(200).end();
    }
    // Handle other request methods
    else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
};
