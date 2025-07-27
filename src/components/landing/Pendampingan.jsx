'use client';

import {
  IconHeartHandshake,
  IconHeartbeat,
  IconBabyCarriage,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

const pendampingan = [
  {
    icon: <IconHeartHandshake size={32} className="text-pink-400" />,
    title: 'Sebelum Kehamilan',
    desc: 'Dapatkan edukasi persiapan kehamilan seperti nutrisi, pemeriksaan awal, dan pemahaman kesehatan reproduksi.',
  },
  {
    icon: <IconHeartbeat size={32} className="text-pink-400" />,
    title: 'Selama Kehamilan',
    desc: 'Pantau perkembangan janin, dapatkan panduan trimester demi trimester, dan tips menjaga kesehatan ibu.',
  },
  {
    icon: <IconBabyCarriage size={32} className="text-pink-400" />,
    title: 'Setelah Melahirkan',
    desc: 'Akses panduan menyusui, perawatan bayi baru lahir, dan pemulihan kesehatan ibu secara menyeluruh.',
  },
];

export default function Pendamping() {
  return (
    <section
      id="pendamping"
      className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-16"
    >
      <motion.div
        className="mb-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      >
        <h2 className="relative inline-block text-2xl md:text-3xl font-semibold mb-8 text-black">
          Pendampingan
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-pink-400 rounded-full" />
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0">
        {pendampingan.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="border rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[4rem] p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="bg-pink-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
