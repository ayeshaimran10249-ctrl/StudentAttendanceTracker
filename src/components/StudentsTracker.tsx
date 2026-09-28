import{ useState, useRef,useEffect}from "react";
import {Card, CardHeader, CardDescription, CardTitle, CardContent} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function StudentsTracker() {
    const[Display, setDisplay]=useState(0);
  
    const inputRef =useRef<HTMLInputElement>(null);
    useEffect(()=>{
        document.title= `Display: ${Display}`;[Display]
    });
    function presentButton() {
        setDisplay(Display +1)
        
    }
    function decreaseButton() {
        setDisplay(Display -1)
        
    }
    function resetButton() {
        setDisplay(0)
        
    }
    function focusInput() {
        inputRef.current?.focus()
        
    }
    return(
        <Card className="w-96 shadow-xl bg-blue-950">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl">
                    Students Attendance Tracker
                </CardTitle>
           
            <CardDescription>
             A System and easy-to-use student attendance tracking system.
            </CardDescription>
            <CardContent>
                <div className="mb-6" >
                    <p className="mb-2 font-medium">
                        Student Name 
                    </p>
               <Input ref={ inputRef } placeholder="Enter your name" />
                </div>
                <div>
                    <p className="text-sm text-slate-500">Attendance Numbers</p>
                    <h2 className="text-6xl text-amber-600">{Display}</h2>
                </div>
            </CardContent>
            <div className="gap-3 flex justify-center">
                <Button onClick={presentButton} className="bg-amber-600">Present</Button>
                <Button onClick={decreaseButton} variant="secondary">Decrease</Button>
                <Button onClick={resetButton}>Reset Attendance</Button>
            </div>
         
           <Button variant="outline" className="mt-4 w-full" onClick={focusInput}>Focus Input Name</Button>
           <div className="mt-3 mb-4 text-2xl font-bold">
             {Display === 0 ? (<p>No attendance recorded</p>):
         Display<= 4 ? (<p>Attendance in progress</p>):
         (<p>Good Attendance ⭐⭐⭐⭐⭐</p>)
    }</div>
 </CardHeader>
        </Card>
    )
};
export default StudentsTracker;