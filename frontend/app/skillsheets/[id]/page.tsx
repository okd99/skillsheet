'use client';

import Link from 'next/link';
import { CalendarDays, Users, Layers, Wrench, FileText } from 'lucide-react';

export default function SkillSheetDetailPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">スキルシート詳細</h1>

      <div className="bg-white p-8 rounded-xl shadow-md">
        <form className="space-y-6">
          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <FileText size={20} className="text-blue-600" />
              タイトル
            </label>
            <input
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              placeholder="例: 医療システム開発"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <CalendarDays size={20} className="text-blue-600" />
              期間
            </label>
            <div className="flex gap-3">
              <input
                type="date"
                className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              />
              <span className="self-center">~</span>
              <input
                type="date"
                className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <Users size={20} className="text-blue-600" />
              メンバー
            </label>
            <input
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              placeholder="例: 3名"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <Layers size={20} className="text-blue-600" />
              スタック
            </label>
            <textarea
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              rows={2}
              placeholder="例: React, Next.js, Spring Boot, MySQL"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <Wrench size={20} className="text-blue-600" />
              ツール
            </label>
            <textarea
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              rows={2}
              placeholder="例: GitHub, Docker, Jira"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold mb-1">
              <FileText size={20} className="text-blue-600" />
              業務内容
            </label>
            <textarea
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              rows={4}
              placeholder="業務内容を入力"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            保存
          </button>
        </form>
      </div>

      <Link
        href="/skillsheets"
        className="block mt-6 text-blue-600 underline hover:text-blue-800"
      >
        ← 一覧に戻る
      </Link>
    </div>
  );
}
