import React from 'react';

export const Tabs = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const TabsList = ({ children }: { children: React.ReactNode }) => <div className='flex space-x-2'>{children}</div>;
export const TabsTrigger = ({ children }: { children: React.ReactNode }) => <button className='px-2 py-1'>{children}</button>;
export const TabsContent = ({ children }: { children: React.ReactNode }) => <div className='mt-2'>{children}</div>;
