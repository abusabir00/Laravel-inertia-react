
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { TrashIcon, PencilIcon, EyeIcon, MagnifyingGlassCircleIcon, PhotoIcon, UserCircleIcon } from '@heroicons/react/16/solid';
import TextInput  from '@/Components/TextInput';
import Pagination from '@/Components/Pagination';
import SelectInput from '@/Components/SelectInput';
import { BUSINESS_STATUS_TEXT_MAP, BUSINESS_STATUS_COLOR_MAP } from '@/Lib/Constants';
import AdminLayout from '../../Layouts/AdminLayout';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextAreaInput from '@/Components/TextAreaInput';


export default function Create({Auth}) {

    const { data, setData, post, errors, reset } = useForm({
        name: "",
        image: "",
        bussness_link: "",
        address: "",
        phone: "",
        max_reviews: "",
        description: "",
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        post(route("businesses.store"));
      };

    return (
        <AdminLayout headerName={'Business List'}>
            <Head title="Business List" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-1 text-gray-900">
                                <div className="w-full p-4 bg-white rounded-md">
                                    <div className="px-8 py-2 -mx-8 overflow-x-auto sm:-mx-8 sm:px-8">
                                        <div className="items-center inline-block min-w-full overflow-hidden rounded-lg shadow">
                                            <form className='p-10' onSubmit={onSubmit}>
                                                <div className="space-y-12">

                                                    <div className="pb-12 border-b border-gray-900/10">
                                                    <h2 className="font-semibold text-gray-900 text-base/7">New Business Information</h2>

                                                    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                        <div className="sm:col-span-3">
                                                            <InputLabel htmlFor="name" value="Business Name" />
                                                            <div className="mt-2">
                                                                <TextInput
                                                                    id="name"
                                                                    name="name"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                                    autoComplete="name"
                                                                    onChange={(e) => setData("name", e.target.value)}
                                                                />
                                                                <InputError message={errors.name} className="mt-2" />
                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-3">
                                                            <InputLabel htmlFor="image" value="image" />
                                                            <div className="mt-2">
                                                                <TextInput
                                                                    id="image"
                                                                    name="image"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                                    autoComplete="image"
                                                                    onChange={(e) => setData("image", e.target.files[0])}
                                                                    type="file"
                                                                />
                                                                <InputError message={errors.image} className="mt-2" />
                                                            </div>
                                                        </div>

                                                        <div className="col-span-full">
                                                            <InputLabel htmlFor="bussness_link" value="Business Link" />
                                                            <div className="mt-2">
                                                                <TextInput
                                                                    id="bussness_link"
                                                                    name="bussness_link"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                                    autoComplete="bussness_link"
                                                                    onChange={(e) => setData("bussness_link", e.target.value)}
                                                                />
                                                                <InputError message={errors.bussness_link} className="mt-2" />
                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-2 sm:col-start-1">
                                                            <InputLabel htmlFor="Address" value="Address" />
                                                            <div className="mt-2">
                                                                <TextInput
                                                                    id="address"
                                                                    name="address"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                                    autoComplete="address"
                                                                    onChange={(e) => setData("address", e.target.value)}
                                                                />
                                                                <InputError message={errors.address} className="mt-2" />
                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-2">
                                                            <InputLabel htmlFor="phone" value="Phone" />
                                                            <div className="mt-2">
                                                                <TextInput
                                                                    id="phone"
                                                                    name="phone"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                                    autoComplete="phone"
                                                                    onChange={(e) => setData("phone", e.target.value)}
                                                                />
                                                                <InputError message={errors.phone} className="mt-2" />
                                                            </div>    
                                                        </div>

                                                        <div className="sm:col-span-2">
                                                            <InputLabel htmlFor="max_reviews" value="Max Reviews" />
                                                            <div className="mt-2">
                                                                <TextInput
                                                                    id="max_reviews"
                                                                    name="max_reviews"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                                    autoComplete="max_reviews"
                                                                    onChange={(e) => setData("max_reviews", e.target.value)}
                                                                />
                                                                <InputError message={errors.max_reviews} className="mt-2" />
                                                            </div>    
                                                        </div>

                                                        <div className="col-span-full">
                                                            <InputLabel htmlFor="description" value="Description" />
                                                            <div className="mt-2">
                                                                <TextAreaInput
                                                                    id="project_description"
                                                                    name="description"
                                                                    className="block w-full mt-1"
                                                                    onChange={(e) => setData("description", e.target.value)}
                                                                />
                                                                <InputError message={errors.description} className="mt-2" />
                                                            </div>    
                                                        </div>


                                                    </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-end mt-6 gap-x-6">
                                                    
                                                    <Link href={route('businesses.index')} className="px-3 py-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200">
                                                        Back
                                                    </Link>

                                                    <button
                                                    type="submit"
                                                    className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                    Save
                                                    </button>
                                                </div>
                                            </form>
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
