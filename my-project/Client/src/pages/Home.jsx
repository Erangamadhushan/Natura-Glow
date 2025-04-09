const Home = () => {
    return (
        <div class="flex flex-wrap bg-pink-600 justify-center items-center h-screen">
            <div class="text-center text-white p-10 rounded-lg shadow-lg bg-pink-200 w-1/2 h-1/2">
                <h1 class="text-4xl font-bold mb-4">Welcome to My Website!</h1>
                <p class="text-xl">This is a simple React application with Tailwind CSS.</p>
                <p class="text-xl">Feel free to explore the pages!</p>
                <a href="/about" class="mt-4 inline-block bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">Learn More</a>
            </div>
        </div>
    )
  };
  
export default Home;