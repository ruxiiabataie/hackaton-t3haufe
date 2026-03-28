import { supabase } from "./supabase";

export async function getOrCreateRoom(roomId) {
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("id", roomId)
    .single();

  if (data) return data;

  const { data: newRoom } = await supabase
    .from("rooms")
    .insert({
      id: roomId,
      code: "// start coding...",
    })
    .select()
    .single();

  return newRoom;
}

export async function updateRoomCode(roomId, code) {
  await supabase
    .from("rooms")
    .update({ code })
    .eq("id", roomId);
}