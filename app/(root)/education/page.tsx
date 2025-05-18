import { appData } from "@/constants/appdata"
import { AcademicCapIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid';
import { education } from "@/constants/resume";
const Education = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-0 select-none">
        {/* heading */}
        <div className="col-span-12 p-4 text-balance text-center ">
          <h1 className="font-bold text-xl ">{appData.education}</h1>
          <p className="text-md p-2 font-medium">{appData.eduDesp}</p>
        </div>

        <div className="col-span-12 "> 
          {education.map((edu) => (
            <div
              key={edu.id}
              className="edu-card"
            >
              <div className="flex items-center space-x-4 mb-4">
                <AcademicCapIcon className="text-purple-500 w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-brand-white">{edu.degree}</h3>
                  <p className="text-sm text-gray-500 dark:text-offWhite">{edu.field}</p>
                </div>
              </div>
              <div className="pl-10">
                <p className="text-gray-600 flex items-center dark:text-brand-white">
                  <BuildingLibraryIcon className="w-4 h-4 mr-2 text-indigo-400 dark:text-brand-white" />
                  {edu.institution}
                </p>
                <p className="text-gray-500 text-sm mt-1 dark:text-brand-white">{edu.year}</p>
                <p className="text-gray-500 text-sm dark:text-brand-white">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Education