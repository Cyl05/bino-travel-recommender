import { Box, FormatByte, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const FinalResults = (props) => {
    const [place, setPlace] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [qrUrl, setQrUrl] = React.useState(null);

    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

    async function getTravelDestinations({ budget, activities, climate, travellingSize }) {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
            Given the following inputs:
            - Budget: ${budget}
            - Activities: ${activities}
            - Climate preference: ${climate}
            - Travelling group size: ${travellingSize}

            Suggest 1 travel destination in India. Suggestion should be concise and in this exact JSON format:

            [
            {
                "place": "Place Name",
                "description": "Brief description of the place and why it's suitable",
                "imageUrl": "https://example.com/image.jpg"
            }
            ]

            Only output the JSON, no extra text.
        `;

        try {
            const result = await model.generateContent(prompt);
            let text = result.response.text();

            text = text.replace("```json", "");
            text = text.replace("```", "");

            const finalOutput = JSON.parse(text);
            return finalOutput[0];
        } catch (error) {
            console.error('Error generating content:', error);
            throw error;
        }
    }

    React.useEffect(() => {
        const fetchDestination = async () => {
            try {
                setLoading(true);
                setError(null);

                if (!import.meta.env.VITE_API_KEY) {
                    throw new Error('API key not found. Make sure VITE_API_KEY is set in your .env file');
                }

                const destination = await getTravelDestinations({
                    budget: props.answers[0],
                    activities: props.answers[1],
                    climate: props.answers[2],
                    travellingSize: props.answers[3],
                });

                setPlace(destination);

                let formattedText = destination.place;
                formattedText = formattedText.replaceAll(" ", "%20");

                const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${formattedText}&per_page=1&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`);
                const responseJSON = await response.json();
                setImage(responseJSON.results[0].urls.raw);

                setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/919800081110?text=Help%20me%20plan%20a%20trip%20to%20${formattedText}`);
            } catch (err) {
                setError(err.message);
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchDestination();
    }, [props.answers]);

    if (loading) {
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
                justifyContent={"center"}
                p={4}
            >
                <Text fontSize="xl">Finding your perfect destination...</Text>
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                w={"50%"}
                h={"50vh"}
                bgColor={"white"}
                color={"red"}
                textAlign={"center"}
                borderRadius={20}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                p={4}
            >
                <Text fontSize="xl">Error: {error}</Text>
            </Box>
        );
    }

    return (
        <>
            <Box
                w={"50%"}
                h={"30vh"}
                bgColor={"white"}
                color={"black"}
                textAlign={"center"}
                borderRadius={20}
                display={"flex"}
                alignItems={"center"}
                gap={10}
                justifyContent={"center"}
                p={4}
                bg="rgba(255, 255, 255, 0.8)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.7)"
                transition="transform 0.3s ease-in-out"
                _hover={{
                    transform: "scale(1.05)",
                }}
            >
                <Image
                    src={image}
                    height={'90%'}
                    border={'2px solid black'}
                    borderRadius={10}
                    objectFit="cover"
                />
                <Box w={'50%'}>
                    <Heading>{place?.place || 'Your Destination'}</Heading>
                    <Text>{place?.description || 'A wonderful place to visit!'}</Text>
                </Box>
            </Box>
            <Box
                w={"50%"}
                h={"30vh"}
                bgColor={"white"}
                color={"black"}
                textAlign={"center"}
                borderRadius={20}
                display={"flex"}
                alignItems={"center"}
                gap={10}
                justifyContent={"center"}
                p={4}
                bg="rgba(255, 255, 255, 0.8)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.7)"
                transition="transform 0.3s ease-in-out"
                _hover={{
                    transform: "scale(1.05)",
                }}
            >
                <VStack>
                    <Heading>Chat with Bino now to plan this trip!</Heading>
                    <a href={'https://bino.bot/'}><Text>https://bino.bot/</Text></a>
                </VStack>
                <Image height={'90%'} src={qrUrl} />
            </Box>
        </>
    );
}

export default FinalResults;