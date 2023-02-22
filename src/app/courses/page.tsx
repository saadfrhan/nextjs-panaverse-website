"use client";

import Items from '@/components/courses/Items';
import React from 'react';

import CoreCourses from '../../images/Courses.png';
import Specializations from '../../images/Specializations.png';

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
