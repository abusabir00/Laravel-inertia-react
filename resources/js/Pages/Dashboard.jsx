import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {UserCircleIcon } from '@heroicons/react/16/solid';
import NavLink from '@/Components/NavLink';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Dashboard() {
    return (
        <AdminLayout headerName={'Admin Dashboard'}>

            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">

                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-1 gap-1 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                                    <div className="flex items-start justify-between">
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-gray-400">Total Users</span>
                                        <span className="text-lg font-semibold">20</span>
                                    </div>
                                    <div className="p-10 bg-gray-200 rounded-md">
                                        <UserCircleIcon className="w-8 h-8 text-gray-400" />
                                    </div>
                                    </div>
                                    <div>
                                    <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
                                    <span>from 2019</span>
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
