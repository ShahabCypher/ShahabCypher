import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import express from "express";
import { SocksProxyAgent } from "socks-proxy-agent";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Socks5 proxy for development test
let axiosInstance = axios;
if (process.env.PROXY === "1") {
  const proxyUrl = process.env.SOCKS5_PROXY_URL;
  const agent = new SocksProxyAgent(proxyUrl);

  axiosInstance = axios.create({
    httpsAgent: agent,
    httpAgent: agent,
  });
}

app.route("/api/sendMessage").post(async (req, res) => {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      return res
        .status(500)
        .json({ error: "Discord webhook URL not configured" });
    }

    const body = req.body;
    if (
      !body.name ||
      !body.email ||
      !body.message ||
      (!body.userIp && body.userIp !== null)
    ) {
      return res.status(400).json({
        error: "Missing required fields: name, email, message, userIp",
      });
    }

    const webhookData = {
      content: "<@654402138700644372>",
      embeds: [
        {
          author: {
            name: req.body.name,
          },
          title: `\`${req.body.email}\``,
          description: req.body.message,
          color: 55807,
          footer: {
            text: req.body.userIp || "Sent at:",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await axiosInstance.post(webhookUrl, webhookData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending message:", error);

    if (error.response) {
      res
        .status(error.response.status)
        .json({ error: "Failed to send message" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
