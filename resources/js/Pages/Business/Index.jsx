
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { TrashIcon, PencilIcon, EyeIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/16/solid';
import TextInput  from '@/Components/TextInput';


export default function Index({businesses}) {
    console.log(businesses);
    return (
        <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Bussness
            </h2>
        }
    >
        <Head title="Dashboard" />

        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-1 text-gray-900">
                        <div className="bg-white p-4 rounded-md w-full">
                            <div className=" flex items-center justify-between pb-6">
                                <div>
                                    <h2 className="text-gray-600 font-semibold">Business List</h2>
                                    <span className="text-xs">All business item</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex bg-gray-50 items-center p-2 rounded-md">

                                        <MagnifyingGlassCircleIcon className="h-5 w-5 text-gray-500" />
                                        <TextInput placeholder="Search..." className="ml-2" />
                                </div>
                                        <div className="lg:ml-40 ml-10 space-x-8">
                                            <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button>
                                            <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
                                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Name
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Phone
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Business Link
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Maximum Review
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Total Review
                                                    </th>
                                                    <th
                                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Status
                                                    </th>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {businesses.data.map((business) => (
                                                    <tr>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-10 h-10">
                                                                    <img className="w-full h-full rounded-full"
                                                                        src="{business.image}"
                                                                        alt="" />
                                                                </div>
                                                                    <div className="ml-3">
                                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                                            {business.name}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">{business.phone}</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                <Link href={business.bussness_link} _target="_blank" >Business Link </Link>
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {business.max_reviews}
                                                            </p>
                                                        </td>

                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span
                                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                    {business.reviewed_count}
                                                            </span>
                                                        </td>

                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <span
                                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                            <span className="relative">{business.status}</span>
                                                            </span>
                                                        </td>

                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex">
                                                            <EyeIcon className="h-5 w-5 text-indigo-500" />
                                                            <PencilIcon className="h-5 w-5 text-green-500" />
                                                            <TrashIcon className="h-5 w-5 text-red-500" />
                                                        </td>


                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div
                                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                            <span className="text-xs xs:text-sm text-gray-900">
                                                Showing 1 to 4 of 50 Entries
                                            </span>
                                            <div className="inline-flex mt-2 xs:mt-0">
                                                <button
                                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                                    Prev
                                                </button>
                                                &nbsp; &nbsp;
                                                <button
                                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
    );
}
