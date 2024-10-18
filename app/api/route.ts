import { NextResponse } from "next/server";


export async function GET () {
    try {

        return NextResponse.json(
            {message: "OK", body: "Does this work?"},
            { status: 200}
        );

    } catch (error) {
        return NextResponse.json({ message: "Error", error}, { status: 500})
    }
}