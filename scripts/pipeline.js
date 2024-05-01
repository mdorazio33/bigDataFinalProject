db.getCollection("finalProject").aggregate(

    // Aggregation Pipeline
    [
        // Stage 1 - addFields for arrestYear, arrestMonth, and arrestDay
        {
            $addFields: {
                "arrestYear": { "$year": "$arrestDate" },
                "arrestMonth": { "$month": "$arrestDate" },
                "arrestDay": { "$dayOfWeek": "$arrestDate" }
            }
        },

        // Stage 2 - merge the newly created fields into the dataset
        {
            $merge: {
                "into": "finalProject",
                "whenMatched": "replace",
                "whenNotMatched": "insert"  
            }
        }
    ],

);