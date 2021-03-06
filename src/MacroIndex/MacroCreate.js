import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  FormText,
  Container,
  Row,
  Col,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";

const MacroCreate = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState(1.2);
  const [goal, setGoal] = useState(0);
  const [gender, setGender] = useState(true);
  

  const calories = () => {
    if (height > 1 && gender === "Male") {
      return Math.round(
        (4.536 * weight + 15.88 * height - 5 * age + 5) * activity + +goal
      ); // Mifflin St. Jeor formula for calculating caloric needs for males
    }
    if (height > 1 && gender === "Female") {
      return Math.round(
        (4.536 * weight + 15.88 * height - 5 * age - 161) * activity + +goal
      ); // Mifflin St. Jeor formula for females
    }
  };

  const proteinRatio = 0.22; // 22% of calories from protein to balance muscle building with longevity

  const protein = () => {
    if (height) {
      return Math.round((calories() * proteinRatio) / 4);
    }
  };

  const fatRatio = 0.3; // 30% of calories from fat

  const fat = () => {
    if (height) {
      return Math.round((calories() * fatRatio) / 9);
    }
  };

  const carbRatio = 0.48; // 48% calories from carbs

  const carbs = () => {
    if (height) {
      return Math.round((calories() * carbRatio) / 4);
    }
  };

  return (
    <Container>
      <Row>
        <Col sm="3"></Col>
        <Col sm="6 mt-1">
          <Form
            style={{
              backgroundColor: "rgba(255,255,255,.58",
              padding: "0.5em",
              boxShadow: "0 0.5em 1em 0",
            }}
          >
            <FormGroup>
              <h2 style={{ textAlign: "center", text: "underline" }}>
                Macro & Calorie Calculator
              </h2>
              <hr />

              <div className="concise">
                <Label for="gender" style={{ paddingRight: "3em" }}>
                  Gender:
                </Label>

                {/* Radio Buttons for Male/Female */}

                <CustomInput
                  onClick={(e) => {
                    setGender(e.target.value);
                  }}
                  inline
                  type="radio"
                  id="genderMale"
                  name="genderRadio"
                  label="Male"
                  value="Male"
                />
                <CustomInput
                  onClick={(e) => {
                    setGender(e.target.value);
                  }}
                  inline
                  type="radio"
                  id="genderFemale"
                  name="genderRadio"
                  label="Female"
                  value="Female"
                />
              </div>
            </FormGroup>

            {/* Height Input Field */}

            <FormGroup>
              <Label for="height">Height:</Label>
              <Input
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                type="number"
                required
                // name="customRadio2"
                id="height"
                placeholder="Enter your height in inches"
                value={height}
              />
              {/* <FormText>Enter your height in inches.</FormText> */}
            </FormGroup>

                {/* Weight Input Field */}

            <FormGroup>
              <Label for="weight">Weight:</Label>
              <Input
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                type="number"
                // name="customRadio2"
                id="weight"
                placeholder="Enter your weight in pounds"
                value={weight}
              />
            </FormGroup>

                {/* Age Input Field */}

            <FormGroup>
              <Label for="age">Age:</Label>
              <Input
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                type="number"
                // name="customRadio2"
                id="age"
                placeholder="Enter your age in years"
                value={age}
              />
            </FormGroup>

                {/* Activity Level Selection */}

            <FormGroup>
              <Label for="activity">Activity Level:</Label>
              <div className="concise">
                <CustomInput
                  onClick={(e) => {
                    setActivity(e.target.value);
                  }}
                  inline
                  type="radio"
                  id="activityNone"
                  name="activityRadio"
                  label="None"
                  value="1.2" // Activity modifier
                />
                <CustomInput
                  onClick={(e) => {
                    setActivity(e.target.value);
                  }}
                  inline
                  type="radio"
                  id="activityLow"
                  name="activityRadio"
                  label="Low"
                  value="1.375"
                />
                <CustomInput
                  onClick={(e) => {
                    setActivity(e.target.value);
                  }}
                  inline
                  type="radio"
                  id="activityModerate"
                  name="activityRadio"
                  label="Medium"
                  value="1.55"
                />
                <CustomInput
                  inline
                  onClick={(e) => {
                    setActivity(e.target.value);
                  }}
                  type="radio"
                  id="activityHigh"
                  name="activityRadio"
                  label="High"
                  value="1.725"
                />
              </div>
            </FormGroup>

                  {/* Modifying caloric intake based off goal */}

            <FormGroup>
              <Label for="goal">What is your goal?</Label>
              <div className="concise">
                <CustomInput
                  inline
                  onClick={(e) => {
                    setGoal(e.target.value);
                  }}
                  type="radio"
                  id="goalGain"
                  name="goalRadio"
                  label="Gain Weight/Muscle"
                  value="250"
                />
                <CustomInput
                  inline
                  onClick={(e) => {
                    setGoal(e.target.value);
                  }}
                  type="radio"
                  id="goalMaintain"
                  name="goalRadio"
                  label="Maintain Weight"
                  value="0"
                />
                <CustomInput
                  inline
                  onClick={(e) => {
                    setGoal(e.target.value);
                  }}
                  type="radio"
                  id="goalLose"
                  name="goalRadio"
                  label="Lose Weight/Fat"
                  value="-500"
                />
              </div>
            </FormGroup>
            <hr />
            <h5 style={{ textAlign: "center", marginTop: "-0.5em" }}>
              Your optimized results are:
            </h5>
            <ul>
              <li>Calories: {calories()} per day</li>
              <li>Fat: {fat()} grams per day </li>
              <li>Carbs: {carbs()} grams per day
               </li>
              <li>Protein: {protein()} grams per day</li>
            </ul>
          </Form>
        </Col>
        <Col sm="3 pt-5">
          <div className="p-2 my-2 rounded">
            <Toast
              style={{
                boxShadow: "0 0.5em 1em 0",
                backgroundColor: "rgba(255,255,255,.8)",
              }}
            >
              <ToastHeader>Activity FAQ</ToastHeader>
              <ToastBody>
                Low activity = Light exercise/sports 1-3 days/week
                <hr />
                Medium activity = Moderate exercise/sports 3-5 days/week
                <hr />
                High activity = High intensity exercise/sports 6-7 days/week
              </ToastBody>
            </Toast>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MacroCreate;
