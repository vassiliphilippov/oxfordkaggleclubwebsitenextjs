import React from 'react';
import { aboutContent } from "@/content/content";

const Table = () => {
    return (
        <div>
            <div className="relative border shadow-lg sm:rounded-lg overflow-x-auto overflow-y-auto max-h-96">
                <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
                        <tr className="bg-teal-700 divide-x">
                            {aboutContent.table.map((section, index) => (
                                <th key={index} scope="col" className={`px-6 py-3 ${index === 0 ? 'min-w-[150px] flex' : ''}`}>
                                    {section.headerName}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {aboutContent.table[0].data.map((_, rowIndex) => (
                            <tr key={rowIndex} className="border-b divide-x dark:bg-gray-800 dark:border-gray-700">
                                {aboutContent.table.map((section, colIndex) => (
                                    <td key={colIndex} className="px-4 py-4 font-medium text-gray-600 whitespace-normal dark:text-white" dangerouslySetInnerHTML={{ __html: section.data[rowIndex].item }} />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className='flex justify-center text-center text-xs mt-3 px-5 text-gray-500'>
                {aboutContent.tableCaption}
            </p>
        </div>
    );
}

export default Table;