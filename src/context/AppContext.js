import {createContext} from'react';
import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading,setLoading]=useState(false);
    const [mealPlan, setMealPlan] = useState(null);
    const [selected,setSelected]=useState('home');
    const [formData, setFormData] = useState({
        age: '',
        height: '',
        weight: '',
        dietPreference: '',
        activityLevel: '',
        workoutDays: '',
        gender: '',
        medicalCondition: '',
        foodAllergies: '',
        primaryGoal: '',
        mealsPerDay: '',
        dislikedFoods: '',
      });

    const [loginFormData,setLoginFormData]=useState({
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        createPassword: '',
        confirmPassword: '',
    
    });
    const url = 'https://exercisedb.p.rapidapi.com';

    // GOOGLE GEMINI API
    const prompt = `You're a highly experienced personal dietician and fitness trainer who has to draw up a fitness diet plan for a day. Please use the following information to create a detailed meal plan for one day.
                I am ${formData.age} years old gender-${formData.gender}.
                My diet preference is ${formData.dietPreference}.
                My height is ${formData.height} cm.
                My current weight is ${formData.weight} kg.
                I work out ${formData.workoutDays} times a week and my activity level is ${formData.activityLevel}.
                My current goal is to ${formData.primaryGoal}. 
                Please don't use ${formData.dislikedFoods} in the meals.
                My current medical conditions are ${formData.medicalCondition}.
                I'm allergic to ${formData.foodAllergies}.
                First, calculate my caloric needs based on the Harris-Benedict equation. Take the activity level into account based on the number of workouts per week.
                and remember don't overexceed the calories and protein amount, only give output according to requirements.
                Deduct 30% from each total calorie and total protein.
                It's important that every meal have different amount of calories, protein, carbs and fats.
                Based on the previously calculated daily caloric intake, create a meal plan for one day with ${formData.mealsPerDay} meals a day.
                Use the following distribution of macronutrients in every meal: 40% protein, 30% carbs, and 20% fats.
                Each meal will include detailed nutritional information, including calories, protein, carbs, and fats. And remember don’t sound like an AI. Avoid any superfluous pre and post descriptive text.
                Include a list of 1 motivational quote that will keep me inspired towards my goals. 
                If number of meals == 4, then break into breakfast, lunch, snacks, dinner,
                If number of meals == 3, then break into breakfast, lunch, dinner
                else if number of meals == 2, then break into lunch and dinner.
                Also give - 
                1)total calories needed,
                2)total Protein needed,
                3)total Carbs needed,
                4)total fats needed in a day and
                -> each meal has the following -1) meal name 
                                                2)items to eat
                                                3)calories  
                                                4)protein 
                                                5)carbs 
                                                6)fats.
                Always remember to provide only healthy food that is readily available and can be easily cooked in any kitchen. 
                For a vegetarian diet, exclude eggs.

                Return the answer as a JSON object.
                for example- 
                {
                  "daily_calorie_needs": 2500,
                  "total_protein": 250,
                  "total_carbs": 188,
                  "total_fats": 83,
                  "meals": [
                      {
                          "meal_name": "Lunch",
                          "items": [
                              "1.5 cups Vegetable and Tofu Curry (made with 100g tofu, 1 cup mixed vegetables, and spices)",
                              "1 cup Brown Rice"
                          ],
                          "calories": 625,
                          "protein": 40,
                          "carbs": 75,
                          "fats": 21
                      },
                      {
                          "meal_name": "Dinner",
                          "items": [
                              "Large Lentil and Vegetable Soup (made with 1 cup lentils, 1 cup mixed vegetables, and broth)",
                              "2 slices Whole Wheat Bread"
                          ],
                          "calories": 625,
                          "protein": 40,
                          "carbs": 75,
                          "fats": 21
                      }
                  ],
                  "quote": "The only bad workout is the one that didn't happen."
                }`;

    const apiKey =process.env.REACT_APP_GOOGLE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
    });

    const fetchDietData = async () => {
        setLoading(true);
        try {
        const result = await model.generateContent(prompt);
        const res = await result.response;
        const text = await res.text();
        const jsonText = text.replace(/```json|```/g, '');      
        const dietPlan = JSON.parse(jsonText);
        setMealPlan(dietPlan);
        console.log(dietPlan);

        } catch (error) {
        console.error('Error:', error);
        alert("Error: " + error);
        } finally {
        setLoading(false);
        }
    };

    


    const values={
        loading,setLoading,
        mealPlan, setMealPlan,
        fetchDietData,
        formData, setFormData,
        isLoggedIn, setIsLoggedIn,
        loginFormData,setLoginFormData,
        selected,setSelected,
        url,
    }

    return <AppContext.Provider value={values}>
        {children}
        </AppContext.Provider>
}
