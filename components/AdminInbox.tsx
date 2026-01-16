import React, { useEffect, useState } from 'react';
import { X, Trash2, Mail, Calendar, User, Target, Inbox } from 'lucide-react';

interface Submission {
  id: string;
  name: string;
  email: string;
  goal: string;
  message: string;
  submittedAt: string;
}

interface AdminInboxProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminInbox: React.FC<AdminInboxProps> = ({ isOpen, onClose }) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Load data when opened
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      loadSubmissions();
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const loadSubmissions = () => {
    const data = localStorage.getItem('contact_submissions');
    if (data) {
      try {
        setSubmissions(JSON.parse(data));
      } catch (e) {
        console.error("Error parsing submissions", e);
      }
    } else {
      setSubmissions([]);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this message?')) {
      const newSubmissions = submissions.filter(sub => sub.id !== id);
      setSubmissions(newSubmissions);
      localStorage.setItem('contact_submissions', JSON.stringify(newSubmissions));
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete ALL messages?')) {
      setSubmissions([]);
      localStorage.removeItem('contact_submissions');
    }
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString('en-US', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[110] flex justify-end transition-all duration-300 ${isOpen ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/0 pointer-events-none'}`}>
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer */}
      <div className={`relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a2e29] rounded-full flex items-center justify-center text-white">
              <Inbox size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-ink">Admin Inbox</h2>
              <p className="text-xs text-ink/50 uppercase tracking-wider">{submissions.length} MESSAGES</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-ink/60"
          >
            <X size={20} />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
          {submissions.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-ink/40 gap-4">
              <Mail size={48} strokeWidth={1} />
              <p>No messages yet.</p>
            </div>
          ) : (
            submissions.map((sub) => (
              <div key={sub.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative">
                
                {/* Meta Row */}
                <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center gap-2 text-[11px] font-bold text-[#1a2e29] bg-[#cfe7a7]/30 px-2 py-1 rounded">
                      <Target size={12} />
                      <span className="uppercase">{sub.goal || 'No Goal'}</span>
                   </div>
                   <div className="flex items-center gap-1 text-[11px] text-gray-400">
                      <Calendar size={12} />
                      {formatDate(sub.submittedAt)}
                   </div>
                </div>

                {/* Content */}
                <div className="mb-3">
                   <h3 className="font-bold text-ink text-lg flex items-center gap-2 mb-1">
                      <User size={16} className="text-gray-400" />
                      {sub.name}
                   </h3>
                   <div className="text-sm text-blue-600 mb-2 truncate">{sub.email}</div>
                   <div className="bg-gray-50 p-3 rounded-xl text-sm text-gray-600 italic leading-relaxed">
                      "{sub.message || 'No message content provided.'}"
                   </div>
                </div>

                {/* Actions */}
                <button 
                  onClick={() => handleDelete(sub.id)}
                  className="absolute top-4 right-4 p-2 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                  title="Delete message"
                >
                   <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {submissions.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-white">
            <button 
              onClick={handleClearAll}
              className="w-full py-3 rounded-xl border border-red-100 text-red-500 font-medium hover:bg-red-50 transition-colors text-sm flex items-center justify-center gap-2"
            >
              <Trash2 size={16} />
              Clear All Messages
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminInbox;