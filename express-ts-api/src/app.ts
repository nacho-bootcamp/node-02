import express from 'express'

const app = express()

interface Dog {
  name: string
  breed: 'labrador' | 'german shepherd' | 'golden retriever'
  adopted_at: Date | null
  birth_date: Date | null
}