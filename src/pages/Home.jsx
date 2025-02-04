
import CommonWrapper from "../components/CommonWrapper";
import { Link, Button } from "@heroui/react";

import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../components/ui/card";
import seoImg from "../assets/home/seo.svg"
import itImg from "../assets/home/it.svg"
import adwordImg from "../assets/home/adwords.svg"
import marketingImg from "../assets/home/maketing.svg"
import {Pagination} from "@heroui/react";



const Home = () => {
  const colors = ["primary", "secondary", "success", "warning", "danger"];

  return (
    <>
      <CommonWrapper>
        <h1 className="md:text-4xl text-3xl font-extrabold text-center "> All Question papers </h1>
      </CommonWrapper>

      <CommonWrapper className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg md:hover:scale-105 hover:shadow-primary/50 transition-all duration-300 flex flex-col ">
          <CardContent className="pt-3">
            <img src={seoImg} alt="" className="w-full h-48 object-cover rounded-t-lg" />
          </CardContent>

          <CardTitle>
            <h2 className="p-6">English</h2>
          </CardTitle>

          <CardDescription>
            <p className="px-6 text-lg flex-grow">Master the art of communication, literature, and writing skills. Learn grammar, vocabulary, and storytelling techniques to excel in English</p>
          </CardDescription>
          <CardContent className="flex gap-2 pt-6 flex-shrink-0">
            <p>Question: 30 |</p>
            <p> Time: 60 min.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              showAnchorIcon
              as={Link}
              color="success"
              href="/question/:id"
              variant="solid"
            >
              See More
            </Button>
          </CardFooter>

        </Card >
        <Card className="hover:shadow-lg md:hover:scale-105 hover:shadow-primary/50 transition-all duration-300 flex flex-col">
          <CardContent className="pt-3">
            <img src={itImg} alt="" className="w-full h-48 object-cover rounded-t-lg" />
          </CardContent>

          <CardTitle>
            <h2 className="p-6">Computer Science</h2>
          </CardTitle>

          <CardDescription>
            <p className="px-6 text-lg flex-grow">Dive into programming, algorithms, and software development. Learn coding languages, data structures, and how to build applications.</p>
          </CardDescription>
          <CardContent className="flex gap-2 pt-6 flex-shrink-0">
            <p>Question: 30 |</p>
            <p> Time: 60 min.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              showAnchorIcon
              as={Link}
              color="success"
                   href="/question/:id"
              variant="solid"
            >
              See More
            </Button>
          </CardFooter>

        </Card >
        <Card className="hover:shadow-lg md:hover:scale-105 hover:shadow-primary/50 transition-all duration-300 flex flex-col ">
          <CardContent className="pt-3">
            <img src={adwordImg} alt="" className="w-full h-48 object-cover rounded-t-lg" />
          </CardContent>

          <CardTitle>
            <h2 className="p-6">Mathematics</h2>
          </CardTitle>

          <CardDescription>
            <p className="px-6 text-lg flex-grow">Explore the world of numbers, algebra, geometry, and calculus. Develop problem-solving skills and logical thinking through mathematical concepts</p>
          </CardDescription>
          <CardContent className="flex gap-2 pt-6 flex-shrink-0">
            <p>Question: 30 |</p>
            <p> Time: 60 min.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              showAnchorIcon
              as={Link}
              color="success"
              href="#"
              variant="solid"
            >
              See More
            </Button>
          </CardFooter>

        </Card >

        <Card className="hover:shadow-lg md:hover:scale-105 hover:shadow-primary/50 transition-all duration-300 flex flex-col">
          <CardContent className="pt-3">
            <img src={marketingImg} alt="" className="w-full h-48 object-cover rounded-t-lg" />
          </CardContent>

          <CardTitle>
            <h2 className="p-6">Geography</h2>
          </CardTitle>

          <CardDescription>
            <p className="px-6 text-lg flex-grow">Understand the Earth, its landscapes, and environments. Explore maps, climates, and the impact of human activity on the planet..</p>
          </CardDescription>
          <CardContent className="flex gap-2 pt-6 flex-shrink-0">
            <p>Question: 30 |</p>
            <p> Time: 60 min.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              showAnchorIcon
              as={Link}
              color="success"
              href="#"
              variant="solid"
            >
              See More
            </Button>
          </CardFooter>

        </Card >
        <Card className="hover:shadow-lg md:hover:scale-105 hover:shadow-primary/50 transition-all duration-300 flex flex-col ">
          <CardContent className="pt-3">
            <img src={seoImg} alt="" className="w-full h-48 object-cover rounded-t-lg" />
          </CardContent>

          <CardTitle>
            <h2 className="p-6">English</h2>
          </CardTitle>

          <CardDescription>
            <p className="px-6 text-lg flex-grow">Master the art of communication, literature, and writing skills. Learn grammar, vocabulary, and storytelling techniques to excel in English</p>
          </CardDescription>
          <CardContent className="flex gap-2 pt-6 flex-shrink-0">
            <p>Question: 30 |</p>
            <p> Time: 60 min.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              showAnchorIcon
              as={Link}
              color="success"
              href="#"
              variant="solid"
            >
              See More
            </Button>
          </CardFooter>

        </Card >
        <Card className="hover:shadow-lg md:hover:scale-105 hover:shadow-primary/50 transition-all duration-300 flex flex-col">
          <CardContent className="pt-3">
            <img src={itImg} alt="" className="w-full h-48 object-cover rounded-t-lg" />
          </CardContent>

          <CardTitle>
            <h2 className="p-6">Computer Science</h2>
          </CardTitle>

          <CardDescription>
            <p className="px-6 text-lg flex-grow">Dive into programming, algorithms, and software development. Learn coding languages, data structures, and how to build applications.</p>
          </CardDescription>
          <CardContent className="flex gap-2 pt-6 flex-shrink-0">
            <p>Question: 30 |</p>
            <p> Time: 60 min.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              showAnchorIcon
              as={Link}
              color="success"
              href="#"
              variant="solid"
            >
              See More
            </Button>
          </CardFooter>

        </Card >
        <Card className="hover:shadow-lg md:hover:scale-105 hover:shadow-primary/50 transition-all duration-300 flex flex-col ">
          <CardContent className="pt-3">
            <img src={adwordImg} alt="" className="w-full h-48 object-cover rounded-t-lg" />
          </CardContent>

          <CardTitle>
            <h2 className="p-6">Mathematics</h2>
          </CardTitle>

          <CardDescription>
            <p className="px-6 text-lg flex-grow">Explore the world of numbers, algebra, geometry, and calculus. Develop problem-solving skills and logical thinking through mathematical concepts</p>
          </CardDescription>
          <CardContent className="flex gap-2 pt-6 flex-shrink-0">
            <p>Question: 30 |</p>
            <p> Time: 60 min.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              showAnchorIcon
              as={Link}
              color="success"
              href="#"
              variant="solid"
            >
              See More
            </Button>
          </CardFooter>

        </Card >
        <Card className="hover:shadow-lg md:hover:scale-105 hover:shadow-primary/50 transition-all duration-300 flex flex-col">
          <CardContent className="pt-3">
            <img src={itImg} alt="" className="w-full h-48 object-cover rounded-t-lg" />
          </CardContent>

          <CardTitle>
            <h2 className="p-6">Computer Science</h2>
          </CardTitle>

          <CardDescription>
            <p className="px-6 text-lg flex-grow">Dive into programming, algorithms, and software development. Learn coding languages, data structures, and how to build applications.</p>
          </CardDescription>
          <CardContent className="flex gap-2 pt-6 flex-shrink-0">
            <p>Question: 30 |</p>
            <p> Time: 60 min.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              showAnchorIcon
              as={Link}
              color="success"
              href="#"
              variant="solid"
            >
              See More
            </Button>
          </CardFooter>

        </Card >

     

      </CommonWrapper>
      <CommonWrapper className=" flex justify-center mt-6">
     
      <Pagination initialPage={1} total={10} color="success" />
  
      </CommonWrapper>

    </>
  );
};

export default Home;
