"use client";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Footer from "../footer/page";
import NavBar from "../navbar/page";
import './breathing.css';
import { LineChart } from '@mui/x-charts';
import { Box, Button, ButtonGroup } from "@mui/material";


interface DataItem {
  Id: number; // Adjust the type based on your actual data structure
  Month_Year: string;
  average_breathing: number;
  // Add other properties as needed
}
const currentUrl = window.location.href;
const urlObj = new URL(currentUrl);
let dogNum = urlObj.searchParams.get('dog')
console.log(dogNum)

export default function Login() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [anotherData, setAnotherData] = useState<DataItem[]>([]);
  const [anotherLoading, setAnotherLoading] = useState(true);
  const [anotherError, setAnotherError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataItem[]>('http://localhost:4000/MonthlyAverage' + dogNum);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };


    fetchData();
  }, []);

  useEffect(() => {
    const fetchAnotherData = async () => {
      try {
        const response = await axios.get<DataItem[]>('http://localhost:4000/average_' + dogNum);
        setAnotherData(response.data);
        setAnotherLoading(false);
      } catch (error) {
        console.error('Error fetching another data:', error);
        setAnotherError('Error fetching another data');
        setAnotherLoading(false);
      }
    };
  
    fetchAnotherData();
  }, []);

  const [dog, setDog] = useState<string>('');
  
  const handleDogChange = (value: string) => {
    setDog(value);
  };

  const dogOptions = ['canineone', 'caninetwo', 'caninethree'];

  

  useEffect(() => {
    if (dog !== '') {
      var url = require('url');
      const adr = new URL('http://localhost:3000/breathing');
      adr.searchParams.append('dog', dog);
      window.location.href = adr.toString();
    }
  }, [dog]);



  if (loading) return <p>Loading...</p>

  const chartData = data.map(item => ({
    monthYear: item.Month_Year,
    value: item.average_breathing
  }));

  const anotherChartData = anotherData.map(item => ({
    name: item.Month_Year,
    value: item.average_breathing
  }));

  return (
    <main>
        <div>
          <NavBar/>
          </div>
          <div> <h1> Breathing Rate </h1>
            <div>
            <Box>
                <ButtonGroup variant="contained">
                  {dogOptions.map(option => (
                    <Button key={option} onClick={() => handleDogChange(option)} disabled={option === dogNum}>
                      {option}
                    </Button>
                  ))}
                </ButtonGroup>
            </Box>
            </div>
          <h2>Daily Average {anotherData.map(item => item.average_breathing)} breaths </h2>
          <h3>This graph shows the average number of breaths that your pet takes on each day in a month</h3>
          
          <LineChart
              dataset={chartData}
              xAxis={[{ scaleType: 'band', data: data.map(item => item.Month_Year)}]}
              series={[
                {
                  data: data.map(item => item.average_breathing), 
                  label: 'Average Breaths Per Day'
                },
              ]}
              width={1000}
              height={400}
            />
          
          </div>
          <div>
            <Footer/>
          </div>

    </main>
  );
}