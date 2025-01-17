import {useEffect, useState} from 'react';
import { StreamChat, TokenOrProvider, User } from 'stream-chat';

export type useClientOptions = {
    apiKey: string;
    user: User;
    tokenOrProvider: TokenOrProvider;
}

// @ts-ignore
export const useClient = ({
    apiKey, user, tokenOrProvider} : useClientOptions
) : StreamChat | undefined => {

    const [chatClient, setChatClient] = useState<StreamChat>();

    useEffect(() => {
        const client = new  StreamChat(apiKey);

        //prevents application from setting state client (user changed, for example)

        let didUserConnectInterrupt = false;

        const connectionPromise = client.connectUser(user, tokenOrProvider).then(() => {
            if(!didUserConnectInterrupt){
                setChatClient(client);
            }
        })

        return () => {
            didUserConnectInterrupt = true;
            setChatClient(undefined);

            //wait for connection to finish before initiating closing sequence

            connectionPromise.then(() => client.disconnectUser()).then(() => {
                console.log('connection closed')
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps -- should re-run only if user.id changes
    }, [apiKey, user.id, tokenOrProvider]);

    return chatClient;

}