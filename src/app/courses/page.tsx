"use client";

import Items from '@/components/courses/Items';
import React from 'react';

import CoreCourses from '../../images/Courses.png';
import Specializations from '../../images/Specializations.png';

export default function Courses() {

  return <>
    <title>Courses - Panaverse</title>
    <h1
      className="2xl:text-5xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-3xl max-sm:text-3xl leading-8 font-extrabold text-center pb-100/40"
    >Courses</h1>
    <Items
      heading="Courses"
      items={[{
        heading: "Core Courses",
        image: CoreCourses
      }, {
        heading: "Specializations",
        image: Specializations
      }]}
    /></>
}
