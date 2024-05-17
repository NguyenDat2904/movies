import { NextResponse } from "next/server";
import axios from "axios";

export const GET = async (req: Request) => {
  try {
    const res = await axios.get(
      `https://ophim16.cc/_next/data/VSpdzWkCdPuoOkHhEcMVy/danh-sach/phim-moi.json`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        },
      }
    );
    const data = await res.data;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
