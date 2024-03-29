"use client";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Footer from "../footer/page";
import NavBar from "../navbar/page";
import './sleep.css';
import { PieChart } from '@mui/x-charts';
import { Box, Button, ButtonGroup, SelectChangeEvent } from "@mui/material";

interface DataItem {
  DogID: number; // Adjust the type based on your actual data structure
  AverageWalkingHours: number;
  AverageHoursSlept: number;
  AverageNormalHours:number;
  AverageEatingHours: number;
  avg_heart_rate: number;
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
    const [another2Data, setAnother2Data] = useState<DataItem[]>([]);
    const [another2Loading, setAnother2Loading] = useState(true);
    const [another2Error, setAnother2Error] = useState<string | null>(null);
    const [another3Data, setAnother3Data] = useState<DataItem[]>([]);
    const [another3Loading, setAnother3Loading] = useState(true);
    const [another3Error, setAnother3Error] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          var http = require('http');
          
          const response = await axios.get<DataItem[]>('http://localhost:4000/BehaviourPatternActionsAverage' + dogNum);
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
          const response = await axios.get<DataItem[]>('http://localhost:4000/HeartToSleep_' + dogNum);
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

    useEffect(() => {
      const fetchAnother2Data = async () => {
        try {
          const response = await axios.get<DataItem[]>('http://localhost:4000/HeartToWalk_' + dogNum);
          setAnother2Data(response.data);
          setAnother2Loading(false);
        } catch (error) {
          console.error('Error fetching another data:', error);
          setAnother2Error('Error fetching another data');
          setAnother2Loading(false);
        }
      };
    
      fetchAnother2Data();
    }, []);

    useEffect(() => {
      const fetchAnother3Data = async () => {
        try {
          const response = await axios.get<DataItem[]>('http://localhost:4000/HeartToNormal_' + dogNum);
          setAnother3Data(response.data);
          setAnother3Loading(false);
        } catch (error) {
          console.error('Error fetching another data:', error);
          setAnother3Error('Error fetching another data');
          setAnother3Loading(false);
        }
      };
    
      fetchAnother3Data();
    }, []);

    const [dog, setDog] = useState<string>('');
  
  const handleChange = (event: SelectChangeEvent) => {
    setDog(event.target.value);
  };

  useEffect(() => {
    if (dog !== '') {
      var url = require('url');
      const adr = new URL('http://localhost:3000/sleep');
      adr.searchParams.append('dog', dog);
      window.location.href = adr.toString();
    }
  }, [dog]);

  const handleDogChange = (value: string) => {
    setDog(value);
  };

  const dogOptions = ['canineone', 'caninetwo', 'caninethree'];

  
  
    if (loading) return <p>Loading...</p>
    const chartData = data.map(item => ({
      ID: item.DogID,
      walk: item.AverageWalkingHours,
      sleep: item.AverageHoursSlept,
      norm: item.AverageNormalHours,
      eat: item.AverageEatingHours,
    }));


    const totalSleepingHours = data.reduce((total, item) => total + item.AverageHoursSlept, 0);
    const totalNormalHours = data.reduce((total, item) => total + item.AverageNormalHours, 0);
    const totalEatingHours = data.reduce((total, item) => total + item.AverageEatingHours, 0);
    const totalWalkingHours = data.reduce((total, item) => total + item.AverageWalkingHours, 0);
    // Define series data
    const seriesData = [
      { id: 0, value: totalSleepingHours, label: 'Sleeping' },
      { id: 1, value: totalNormalHours, label: 'Normal' },
      { id: 2, value: totalEatingHours, label: 'Eating' },
      { id: 3, value: totalWalkingHours, label: 'Walking' },
    ];


  return (
    <main>
        <div>
          <NavBar/>
          </div>
          <div> <h1> Sleep </h1>

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
          <h3>This graph shows how your pet's days are distributed in hours</h3>
          <PieChart
              dataset={chartData}
              series= {[{ data: seriesData }]}
              width={600}
              height={300}
              tooltip={{ trigger: 'item' }}
            />
          <h4>
            Average Heart Rate while sleeping: {anotherData.map(item => item.avg_heart_rate)}
          </h4><h4>
            Average Heart Rate while walking: {another2Data.map(item => item.avg_heart_rate)}
            </h4><h4>
            Average Heart Rate while normal: {another3Data.map(item => item.avg_heart_rate)}
          </h4>
            

          </div>
          <div>
          
          </div>
          <div>
            <Footer/>
          </div>

    </main>
  );
}
