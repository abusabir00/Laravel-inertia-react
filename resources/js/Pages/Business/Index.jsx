
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { TrashIcon, PencilIcon, EyeIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/16/solid';
import TextInput  from '@/Components/TextInput';
import Pagination from '@/Components/Pagination';
import SelectInput from '@/Components/SelectInput';
import { BUSINESS_STATUS_TEXT_MAP, BUSINESS_STATUS_COLOR_MAP } from '@/Lib/Constants';
import AdminLayout from '../../Layouts/AdminLayout';


export default function Index({businesses, queryParam = {}, success= '', error = ''}) {
    console.log(success, error);
    // search business
    const searchBusiness = (name, value) => {
        console.log(name, value);
        if (value) {
            queryParam[name] = value;
        }else{
            delete queryParam[name];
        }
        router.get(route('businesses.index'), queryParam);
    };

    const onKeyPress = (e) => {
        if (e.key !== 'Enter') return;
        searchBusiness('name', e.target.value);
    }

    return (
        <AdminLayout headerName={'Business List'} successMessage={success} errorMessage={error}>
            <Head title="Business List" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-1 text-gray-900">
                            <div className="w-full p-4 bg-white rounded-md">
                                <div className="flex items-center justify-between pb-6 ">
                                    <div>
                                        <h2 className="font-semibold text-gray-600">Business List</h2>
                                        <span className="text-xs">All business item</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center p-2 rounded-md bg-gray-50">

                                            <MagnifyingGlassCircleIcon className="w-5 h-5 text-gray-500" />
                                            <TextInput placeholder="Search..." className="ml-2" 
                                                onBlur={ e => searchBusiness('name', e.target.value)}
                                                onKeyPress={ e => searchBusiness('name', e)}
                                            />
                                        </div>
                                        <div className="flex items-center p-2 rounded-md bg-gray-50">
                                            <SelectInput className="ml-2" onChange={e => searchBusiness('status', e.target.value)}> 
                                                <option value="">Status</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                                <option value="pending">Pending</option>
                                            </SelectInput>
                                        </div>
                                            <div className="ml-10 space-x-8 lg:ml-40">
                                                {/* <button className="px-4 py-2 font-semibold tracking-wide text-white bg-indigo-600 rounded-md cursor-pointer">New Report</button> */}
                                                <Link href={route('businesses.create')} className="px-4 py-2 font-semibold tracking-wide text-white bg-indigo-600 rounded-md cursor-pointer">
                                                    New Business
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="px-4 py-2 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                                            <table className="min-w-full leading-normal">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                                            Name
                                                        </th>
                                                        <th
                                                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                                            Phone
                                                        </th>
                                                        <th
                                                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                                            Business Link
                                                        </th>
                                                        <th
                                                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                                            Maximum Review
                                                        </th>
                                                        <th
                                                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                                            Total Review
                                                        </th>
                                                        <th
                                                            className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                                            Status
                                                        </th>
                                                        <th className="px-5 py-3 bg-gray-100 border-b-2 border-gray-200">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {businesses.data.map((business) => (
                                                    <tr key={business.id}>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-10 h-10">
                                                                    <img className="w-full h-full rounded-full"
                                                                        src={business.image}
                                                                        alt="" />
                                                                </div>
                                                                    <div className="ml-3">
                                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                                            {business.name}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <p className="text-gray-900 whitespace-no-wrap">{business.phone}</p>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <span
                                                                className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-green-500 rounded-full opacity-50"></span>
                                                                    <Link href={business.bussness_link} _target="_blank" >Business Link </Link>
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <span
                                                                className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-green-200 rounded-full opacity-50"></span>
                                                                    {business.max_reviews}
                                                            </span>
                                                        </td>

                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <span
                                                                className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-red-500 rounded-full opacity-50"></span>
                                                                    {business.reviewed_count}
                                                            </span>
                                                        </td>

                                                        <td className="px-5 py-5 border-b border-gray-200 ${} text-sm">
                                                            <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${BUSINESS_STATUS_COLOR_MAP[business.status]}`}>
                                                                {BUSINESS_STATUS_TEXT_MAP[business.status]}
                                                            </span>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <div className="flex items-center space-x-4">
                                                                <Link href={route('businesses.show', business.id)}>
                                                                    <EyeIcon className="w-5 h-5 text-gray-500" />
                                                                </Link>
                                                                <Link href={route('businesses.edit', business.id)}>
                                                                    <PencilIcon className="w-5 h-5 text-gray-500" />
                                                                </Link>
                                                                <Link href={route('businesses.destroy', business.id)}>
                                                                    <TrashIcon className="w-5 h-5 text-gray-500" />
                                                                </Link>
                                                            </div>
                                                        </td>


                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                            <Pagination meta={businesses.meta} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>    
    );

}
