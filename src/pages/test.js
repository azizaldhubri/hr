import React, { useState } from 'react';

const Dashboard = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div style={{ display: 'flex' }}>
            {/* Sidebar */}
            {isSidebarVisible && (
                <aside
                    style={{
                        width: '250px',
                        height: '100vh',
                        position: 'fixed',
                        backgroundColor: '#f4f4f4',
                        padding: '20px',
                        overflowY: 'auto',
                    }}
                >
                    <nav>
                        <ul>
                            <li>الرئيسية</li>
                            <li>إدارة المستخدمين</li>
                            <li>الإعدادات</li>
                        </ul>
                    </nav>
                </aside>
            )}

            {/* Main Content */}
            <main
                style={{
                    marginLeft: isSidebarVisible ? '250px' : '0',
                    padding: '20px',
                    width: '100%',
                    transition: 'margin-left 0.3s ease',
                }}
            >
                <button onClick={toggleSidebar} style={{ marginBottom: '20px' }}>
                    {isSidebarVisible ? 'إخفاء القائمة' : 'إظهار القائمة'}
                </button>
                <h1>مرحباً بك في لوحة القيادة</h1>
                <p>هذا نص طويل لمساعدتك على اختبار التمرير.</p>
                <div style={{ height: '2000px' }} />
            </main>
        </div>
    );
};

export default Dashboard;
