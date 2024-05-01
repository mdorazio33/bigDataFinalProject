## Big Data Final Project - MongoDB & Tableau

For this project, I used a combination of MongoDB and Tableau to import and visualize an authentic 226,000-row, 19-column public NYPD Arrests dataset for the year 2023 obtained from NYC OpenData.

I first downloaded the data as a CSV and created a new MongoDB database cluster using MongoDB Atlas. Afterwards, I connected my cluster to Studio 3T and imported my dataset. From within Studio 3T, I modified the field names to camelcase for better readability, used an aggregation pipeline to derive arrestYear, arrestMonth, and arrestDay columns from the arrestDate column via an addFields statement, and combined them into the dataset via a merge statement.

Next, I created a Federated Database Instance in MongoDB Atlas to connect my database to Tableau through a VirtualCollection (also known as a VirtualDatabase). This was accomplished by downloading the MongoDB JDBC Driver and Tableau Connector, and using my Federated Database Instance Connection Information to sign in from within Tableau Desktop.

From here, I had full access to my data in real-time, and created a total of four visualizations using the NYPD Arrests dataset. I ended up using only three visualizations in my dashboard, however, as the three that I had chosen seemed to be the most relevant to include for interactive purposes.

This repository contains my project's Tableau workbook, the NYPD Arrests public dataset (along with a data dictionary), the scripts for my aggregation pipeline and a time-based filter query, along with images and PDFs of both my visualizations and final dashboard.

If one seeks to recreate this project on their own machine, it is recommended to follow similar steps to those outlined above. These involve downloading the CSV file in this repository locally, creating a MongoDB database cluster through MongoDB Atlas, importing the data into Studio3T and following the aggregation pipeline steps, creating a Federated Database Instance, and using your connection credentials to sign into Tableau via the Tableau Connector when opening the workbook.