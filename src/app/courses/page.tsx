"use client";

import Items from '@/components/courses/Items';
import React from 'react';

import CoreCourses from '../../images/Courses.png';
import Specializations from '../../images/Specializations.png';

export const metadata = {
  title: 'Courses - Panaverse',
  description: `This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.`,
};

export default function Courses() {

  return <Items
    heading="Core Courses"
    items={[{
      heading: "Core Courses",
      image: CoreCourses
    }, {
      heading: "Specializations",
      image: Specializations
    }]}
  />
}
