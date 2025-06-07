'use client'

import React, { useState } from 'react';
import { Search, Filter, Calendar, User, Package, Edit, Trash2, Plus, Eye } from 'lucide-react';

// Static data for activity logs
const activityLogsData = [
  {
    id: 1,
    timestamp: '2024-06-03 14:30:25',
    user: 'Admin',
    action: 'Created',
    target: 'Product',
    details: 'Added new product "Taro Milktea" - 16 oz - ₱85',
    status: 'Success',
    icon: Plus,
    color: 'text-green-600'
  },
  {
    id: 2,
    timestamp: '2024-06-03 14:15:12',
    user: 'Manager',
    action: 'Updated',
    target: 'Product',
    details: 'Modified "Matcha Latte" price from ₱90 to ₱95',
    status: 'Success',
    icon: Edit,
    color: 'text-blue-600'
  },
  {
    id: 3,
    timestamp: '2024-06-03 13:45:08',
    user: 'Admin',
    action: 'Deleted',
    target: 'Product',
    details: 'Removed product "Old Coffee Blend" from inventory',
    status: 'Success',
    icon: Trash2,
    color: 'text-red-600'
  },
  {
    id: 4,
    timestamp: '2024-06-03 13:20:33',
    user: 'Staff',
    action: 'Viewed',
    target: 'Product',
    details: 'Accessed product details for "Brown Sugar Milktea"',
    status: 'Success',
    icon: Eye,
    color: 'text-gray-600'
  },
  {
    id: 5,
    timestamp: '2024-06-03 12:55:17',
    user: 'Manager',
    action: 'Updated',
    target: 'Product',
    details: 'Changed status of "Wintermelon Tea" from Available to Not Available',
    status: 'Success',
    icon: Edit,
    color: 'text-blue-600'
  },
  {
    id: 6,
    timestamp: '2024-06-03 12:30:44',
    user: 'Admin',
    action: 'Created',
    target: 'Product',
    details: 'Added new product "Strawberry Fruit Tea" - 24 oz - ₱120',
    status: 'Success',
    icon: Plus,
    color: 'text-green-600'
  },
  {
    id: 7,
    timestamp: '2024-06-03 11:45:22',
    user: 'Staff',
    action: 'Updated',
    target: 'Product',
    details: 'Modified ingredients for "Classic Milktea" - Added Tapioca',
    status: 'Success',
    icon: Edit,
    color: 'text-blue-600'
  },
  {
    id: 8,
    timestamp: '2024-06-03 11:20:15',
    user: 'Manager',
    action: 'Deleted',
    target: 'Product',
    details: 'Removed "Expired Green Tea" from menu',
    status: 'Success',
    icon: Trash2,
    color: 'text-red-600'
  },
  {
    id: 9,
    timestamp: '2024-06-03 10:55:08',
    user: 'Admin',
    action: 'Created',
    target: 'Product',
    details: 'Added new product "Caramel Macchiato" - 20 oz - ₱110',
    status: 'Success',
    icon: Plus,
    color: 'text-green-600'
  },
  {
    id: 10,
    timestamp: '2024-06-03 10:30:33',
    user: 'Staff',
    action: 'Viewed',
    target: 'Product',
    details: 'Checked inventory status for all Milktea products',
    status: 'Success',
    icon: Eye,
    color: 'text-gray-600'
  }
];

function ActivityLogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUser, setFilterUser] = useState('');
  const [filterAction, setFilterAction] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // Get unique values for filters
  const uniqueUsers = [...new Set(activityLogsData.map(log => log.user))];
  const uniqueActions = [...new Set(activityLogsData.map(log => log.action))];

  // Filter logs based on search and filters
  const filteredLogs = activityLogsData.filter(log => {
    const matchesSearch = log.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUser = !filterUser || log.user === filterUser;
    const matchesAction = !filterAction || log.action === filterAction;
    const matchesDate = !filterDate || log.timestamp.startsWith(filterDate);
    
    return matchesSearch && matchesUser && matchesAction && matchesDate;
  });

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  return (
    <div className="bg-white w-full h-full p-6 rounded-xl shadow-md flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Activity Logs</h1>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-600"
            />
          </div>

          {/* User Filter */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterUser}
              onChange={(e) => setFilterUser(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-600"
            >
              <option value="">All Users</option>
              {uniqueUsers.map(user => (
                <option key={user} value={user}>{user}</option>
              ))}
            </select>
          </div>

          {/* Action Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-600"
            >
              <option value="">All Actions</option>
              {uniqueActions.map(action => (
                <option key={action} value={action}>{action}</option>
              ))}
            </select>
          </div>

          {/* Date Filter */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Activity Logs Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex-1">
        <div className="overflow-x-auto max-h-[500px]">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLogs.map((log, index) => {
                const { date, time } = formatTimestamp(log.timestamp);
                const IconComponent = log.icon;
                
                return (
                  <tr key={log.id} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{date}</div>
                      <div className="text-sm text-gray-500">{time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="text-gray-600" size={16} />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{log.user}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <IconComponent className={`${log.color} mr-2`} size={16} />
                        <span className={`text-sm font-medium ${log.color}`}>
                          {log.action}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-md">
                        {log.details}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredLogs.length === 0 && (
          <div className="text-center py-12">
            <Package className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No activities found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Pagination (Static for now) */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredLogs.length}</span> of{' '}
          <span className="font-medium">{activityLogsData.length}</span> results
        </div>
        <div className="flex space-x-2">
          <button
            disabled
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md cursor-not-allowed"
          >
            Previous
          </button>
          <button
            disabled
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActivityLogsPage;