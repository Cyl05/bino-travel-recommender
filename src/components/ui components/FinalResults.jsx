import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const FinalResults = (props) => {
    const [place, setPlace] = React.useState();

    let output = null;

    const genAI = new GoogleGenerativeAI(import.meta.env.API_KEY);
    console.log(import.meta.env.API_KEY);
    async function getTravelDestinations({ budget, activities, climate, travellingSize }) {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
            Given the following inputs:
            - Budget: ${budget}
            - Activities: ${activities}
            - Climate preference: ${climate}
            - Travelling group size: ${travellingSize}

            Suggest 1 travel destinations in India. Suggestion should be concise and in this exact JSON format:

            [
            {
                "place": "Place Name",
                "description": "Brief description of the place and why it's suitable"
            },
            ...
            ]

            Only output the JSON, no extra text.
        `;

        const result = await model.generateContent(prompt);
        let text = result.response.text();

        text = text.replace("```json", "");
        text = text.replace("```", "");

        const finalOutput = JSON.parse(text);
        return finalOutput;
    }

    const fetchDestination = async () => {
        output = await getTravelDestinations({
            budget: props.answers[0],
            activities: props.answers[1],
            climate: props.answers[2],
            travellingSize: props.answers[3],
        });
    }
    fetchDestination();
    console.log(output);


    React.useEffect(() => {
        console.log(place);
    }, [place]);
    return (
        <Box
            w={"50%"}
            h={"50vh"}
            bgColor={"white"}
            color={"black"}
            textAlign={"center"}
            borderRadius={20}
            display={"flex"}
            alignItems={"center"}
            gap={10}
            justifyContent={"center"}
            p={4}
        >
            <Image src="https://images.unsplash.com/photo-1541077250662-c9cf17e37dde?ixid=M3w3NjgzNzB8MHwxfHNlYXJjaHwxfHxrb2glMjBsYW50YSUyMHRoYWlsYW5kfGVufDB8fHx8MTc1MDc2NzgwNHww&ixlib=rb-4.1.0" height={'50%'} border={'2px solid black'} borderRadius={10} />
            <Box w={'50%'}>
                <Heading>Koh Lanta, Thailand</Heading>
                <Text>Offers a blend of tropical beaches, affordable prices, and opportunities for kayaking, rock climbing, and island hopping, perfect for solo adventure within the budget.</Text>
            </Box>
        </Box>
    )
}

export default FinalResults;