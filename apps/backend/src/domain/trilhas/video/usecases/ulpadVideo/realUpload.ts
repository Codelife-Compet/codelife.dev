export async function realUpload(authorizationCode: string) {
    
    oauth2Client.getToken(authorizationCode, (err, tokens) => {
        if (!tokens)
            console.error('Error getting oAuth tokens');
        else
            oauth2Client.setCredentials(tokens);

        if (err) {
            console.error('Error getting oAuth tokens:', err);
        }
        // `tokens` should now contain an `access_token` and a `refresh_token`
    });

    const youtube = google.youtube({ version: 'v3', auth: oauth2Client });


    const videoMetadata = {
        snippet: {
            title: "Titulo Teste",
            description: "Descrição Teste",
            tags: ['A', 'B', 'C'],
            categoryId: '22', // Numeric video category ID
        },
        status: {
            privacyStatus: 'private', // Video privacy status
        }
    };

    const videoStream = fs.createReadStream(path.join(__dirname, "./video.mp4"));

    youtube.videos.insert(
        {
            part: ['snippet', 'status'],
            requestBody: {
                snippet: {
                    title: "Titulo Teste",
                    description: "Descrição Teste",
                    tags: ['A', 'B', 'C'],
                    categoryId: '22', // Numeric video category ID
                },
                status: {
                    privacyStatus: 'private', // Video privacy status
                },
            },
            media: {
                body: videoStream,
            },
            notifySubscribers: false,
        },
        (err, res) => {
            if (err) {
                console.error('Error uploading video', err);
                return;
            }

            console.log('Video uploaded successfully');
        }
    );
}