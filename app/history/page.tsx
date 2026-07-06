'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, Calendar, Trash2, ChevronDown, ChevronUp, Music, Type, Hash, PlayCircle, ExternalLink, Palette, Clock, Layout } from 'lucide-react';
import { getHistory, deleteFromHistory, clearHistory } from '@/lib/history';
import { HistoryItem } from '@/types';
import toast from 'react-hot-toast';

export default function HistoryPage() {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setHistoryItems(getHistory());
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newHistory = deleteFromHistory(id);
    setHistoryItems(newHistory);
    toast.success('Analysis removed from history');
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all history?')) {
      const newHistory = clearHistory();
      setHistoryItems(newHistory);
      toast.success('History cleared');
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="max-w-md mx-auto p-4 min-h-screen pb-24">
      <div className="flex justify-between items-center mb-6 pt-4">
        <h1 className="text-2xl font-bold flex items-center">
          <History className="mr-2 text-purple-500" /> History
        </h1>
        {historyItems.length > 0 && (
          <button 
            onClick={handleClearAll}
            className="text-xs text-red-500 hover:text-red-400 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-full transition"
          >
            Clear All
          </button>
        )}
      </div>

      {historyItems.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          <History size={48} className="mx-auto mb-4 opacity-20" />
          <p>No history yet.</p>
          <p className="text-sm mt-2">Analyze some photos to see them here!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {historyItems.map((item) => {
            const isExpanded = expandedId === item.id;
            const dateStr = new Date(item.timestamp).toLocaleDateString(undefined, { 
              month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
            });

            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                key={item.id} 
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
              >
                {/* Header (Click to expand) */}
                <div 
                  className="p-4 cursor-pointer hover:bg-gray-800/50 transition flex items-center justify-between"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-700 bg-black">
                      <img src={item.image} alt="Thumbnail" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 flex items-center mb-1">
                        <Calendar size={10} className="mr-1" /> {dateStr}
                      </span>
                      <span className="text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-2 py-0.5 rounded-md capitalize font-medium border border-purple-500/10">
                        {item.result.mood}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={(e) => handleDelete(item.id, e)}
                      className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-full transition"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="text-gray-600">
                      {isExpanded ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 border-t border-gray-800 space-y-4 bg-gray-950/50">
                        
                        {/* Vibe Details */}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="bg-gray-900 p-2 rounded-lg border border-gray-800">
                            <p className="text-gray-500 flex items-center mb-0.5"><Palette size={12} className="mr-1"/> Aesthetic</p>
                            <p className="font-semibold text-gray-300 truncate" title={item.result.aestheticStyle}>{item.result.aestheticStyle}</p>
                          </div>
                          <div className="bg-gray-900 p-2 rounded-lg border border-gray-800">
                            <p className="text-gray-500 flex items-center mb-0.5"><Clock size={12} className="mr-1"/> Best Time</p>
                            <p className="font-semibold text-gray-300 truncate" title={item.result.bestPostingTime}>{item.result.bestPostingTime}</p>
                          </div>
                        </div>

                        {/* Music */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center">
                            <Music size={12} className="mr-1 text-purple-500"/> Music
                          </h4>
                          <div className="space-y-2">
                            {item.result.music.slice(0, 2).map((track, i) => (
                              <div key={i} className="bg-gray-900 p-3 rounded-lg border border-gray-800">
                                <p className="font-bold text-sm">{track.title}</p>
                                <p className="text-xs text-gray-400 mb-2">{track.artist}</p>
                                <div className="flex space-x-2">
                                  <a href={track.spotify} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600/20 text-green-500 text-[10px] font-bold py-1.5 px-2 rounded flex items-center justify-center">
                                    <PlayCircle size={10} className="mr-1"/> Spotify
                                  </a>
                                  <a href={track.youtube} target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600/20 text-red-500 text-[10px] font-bold py-1.5 px-2 rounded flex items-center justify-center">
                                    <ExternalLink size={10} className="mr-1"/> YouTube
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Captions */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center">
                            <Type size={12} className="mr-1 text-blue-500"/> Captions
                          </h4>
                          <ul className="space-y-1">
                            {item.result.captions.slice(0, 2).map((cap, i) => (
                              <li key={i} className="text-xs text-gray-300 italic">"{cap}"</li>
                            ))}
                          </ul>
                        </div>

                        {/* Hashtags */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center">
                            <Hash size={12} className="mr-1 text-green-500"/> Hashtags
                          </h4>
                          <p className="text-xs text-blue-400">{item.result.hashtags.join(' ')}</p>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}
    </main>
  );
}