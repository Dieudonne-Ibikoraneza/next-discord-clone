"use client"

import {useClient} from "@/hooks/useClient";
import React from "react";

const User: User = {
    id: "9551a77a-a97a-4514-b47c-802f4d72aaae",
    name: "IBIKORANEZA Dieudonne",
    image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
}

const apiKey = "p7n6y3vjavv5";
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTU1MWE3N2EtYTk3YS00NTE0LWI0N2MtODAyZjRkNzJhYWFlIn0.HmRkJFdrqi-245j7OtI13dawlH_mpCK5qcqOZc3g8DY';

const Home = () => {

    const chatClient = useClient({
        apiKey, user, tokenOrProvider: userToken
    })

    if (!chatClient) {
        return <LoadingIndicator/>;
    }

    return (
        <Chat client={chatClient} theme='str-chat__theme-light'>

            <ChannelList/>
            <Channel>
                <Window>
                    <ChannelHeader/>
                    <MessageList/>
                    <MessageInput/>
                </Window>
                <Thread/>
            </Channel>
        </Chat>
    )
}

export default Home;