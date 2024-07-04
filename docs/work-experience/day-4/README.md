# Day 4: Web Dev (Backend) & Electronics

In the world of electronics, 

## Today's goals

- [ ] Become familiar with Python syntax
- [ ] Learn a little bit about security with GitHub
- [ ] Start on tomorrow's presentation
- [ ] Update journal if haven't already
- [ ] Bonus: Learn about electronics with a Raspberry Pi
- [ ] Optional: Start on a bonus project for tomorrow


## Coding

We spent this week learning about web development, with a focus on the frontend. But that's only part of web development! We also have server-side languages that require a running server in order to work properly.

### Introduction to Server-Side Programming

#### What is Server-Side Programming?
Server-side programming is like the behind-the-scenes work in a theater production. Just like the actors on stage (frontend) perform for the audience, there's a lot happening backstage (server-side) to make the show run smoothly. Server-side programming involves writing code that runs on a server and handles things like storing and retrieving data, processing requests, and sending the right information back to the frontend.

#### Why Do We Need Server-Side Programming?
When you use a website or an app, you often need to interact with data. For example:
- When you log in, your credentials need to be checked against stored data.
- When you post a comment, it needs to be saved somewhere so others can see it.
- When you search for something, the app needs to look through data to find what you need.

Server-side programming makes all this possible by handling the heavy lifting of data management, security, and logic processing.

#### How Does it Work?
1. **Client Request**: When you interact with a website (like clicking a button), a request is sent from your device (the client) to a server.
2. **Server Processing**: The server receives the request and processes it. This could involve looking up information in a database, performing calculations, or other tasks.
3. **Response Sent Back**: Once the server has the information, it sends a response back to your device, which the frontend then displays to you.

### Example: Logging Into a Website
1. **Frontend**: You enter your username and password and click "Log In."
2. **Request**: Your login information is sent to the server.
3. **Server-Side**: The server checks your information against the database.
4. **Response**: If the information matches, the server sends back a message saying you’re logged in, and the frontend updates to show you’re logged in.

### Introduction to Python

#### What is Python?
Python is a popular programming language known for being easy to read and write. It's used in many areas, from web development to data analysis, AI, and more. Python's simplicity makes it a great language for beginners.

#### Why Learn Python?
- **Easy to Learn**: Python's syntax is clear and resembles plain English, which makes it easier to understand and write.
- **Versatile**: Python can be used for many different types of projects, from web applications to games to scientific research.
- **Popular**: Python is widely used in the industry, so learning it can be very useful for future projects and career opportunities.

#### Basic Python Concepts
1. **Variables**: Think of variables as containers for storing data values. For example:
   ```python
   name = "John"
   age = 14
   ```
2. **Data Types**: Common data types include strings (text), integers (whole numbers), and floats (decimal numbers).
   ```python
   greeting = "Hello, World!"  # String
   year = 2024  # Integer
   pi = 3.14  # Float
   ```
3. **Control Structures**: These help you make decisions and repeat tasks. For example:
    - **If Statements**: Used for decision-making.
      ```python
      if age >= 18:
          print("You are an adult.")
      else:
          print("You are a minor.")
      ```
    - **Loops**: Used for repeating tasks.
      ```python
      for i in range(5):
          print(i)
      ```
4. **Functions**: Reusable blocks of code that perform a specific task.
   ```python
   def greet(name):
       print(f"Hello, {name}!")
   
   greet("Alice")
   ```

### Putting It All Together
Now, let’s see a simple example that combines what we've learned:

#### A Simple Server-Side Script in Python
Imagine you have a website where users can submit their favorite movies. Here's a basic example of how a server-side script might handle this in Python.

1. **Client-Side**: User submits their favorite movie.
2. **Server-Side Script**:
   ```python
   from flask import Flask, request, jsonify
   
   app = Flask(__name__)
   
   favorite_movies = []
   
   @app.route('/add_movie', methods=['POST'])
   def add_movie():
       data = request.json
       movie = data.get('movie')
       if movie:
           favorite_movies.append(movie)
           return jsonify({"message": "Movie added!"}), 201
       return jsonify({"error": "No movie provided"}), 400
   
   @app.route('/movies', methods=['GET'])
   def get_movies():
       return jsonify(favorite_movies), 200
   
   if __name__ == '__main__':
       app.run(debug=True)
   ```
    - **Explanation**: This script uses Flask, a Python web framework, to handle HTTP requests. Users can add their favorite movies and retrieve the list of all favorite movies.

By understanding server-side programming and learning Python, you can create powerful applications that handle complex tasks and provide rich user experiences.

## Exercises

Try and see if you can follow along the Python exercises [here](https://pynative.com/python-basic-exercise-for-beginners/), using the cheatsheet [here](https://www.pythoncheatsheet.org/).

## Project

Here are some project ideas for the day, but I don't want to give you anything step-by-step because you'll build and then abandon it! I'm not sure if you'll be able to finish, but even if you don't that's fine, it's all about the learning process.

Pick one, let me know and I'll send you some resources for how you might do it!

1. **Weather Station with Data Analysis**: Build a weather station using various sensors (temperature, humidity, pressure) and collect data over time.
2. **Personal Fitness Tracker**: Create a fitness tracking system using sensors (like accelerometers) to track physical activity.
3. **Home Automation System**: Set up a smart home system to control lights, temperature, and other devices using the Raspberry Pi.
4. **AI-Powered Chatbot**: Develop a simple AI chatbot that can answer questions or engage in basic conversation.
5. **Real-time Stock Market Analyzer**: Create a system to monitor stock prices in real-time and analyze historical data.
6. **Interactive Learning Dashboard**: Develop an interactive dashboard that provides educational content and tracks learning progress.
7. **Environmental Monitoring System**: Set up a system to monitor environmental conditions (air quality, noise levels) using sensors.
8. **Sports Statistics Tracker**: Build a system to track and analyze statistics for a favorite sport or team.
9. **Music Recommendation System**: Create a system that recommends music based on user preferences and listening habits.

>These projects can help you develop a wide range of skills, from coding and data analysis to machine learning and IoT integration. They also provide opportunities for both practical applications and creative exploration.




:::info[Tip]
Bonus challenge: If you're out of tasks and would like to try something a bit more challenging, give [Advent of Code](https://adventofcode.com/) a try. Even though it's not December, you can still take part of one of the day's challenges.
:::


