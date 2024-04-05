import express, { Request, Response } from 'express';
import Transaction from '../models/transactions';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Get all transactions
router.get('/', async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add new transaction
router.post('/', async (req: Request, res: Response) => {
  try {
    const { amount, description, category, date } = req.body;
    const randomId = uuidv4();

    // Input validation
    if (!amount || !description || !date || !category) {
    return res.status(400).json({ error: 'All fields are required.' });
    }

    if (typeof amount !== 'number') {
    return res.status(400).json({ error: 'Amount must be a numeric value.' });
    }

    if (category !== 'INCOME' && category !== 'EXPENSE') {
    return res.status(400).json({ error: 'Type must be either "INCOME" or "EXPENSE".' });
    }

    const newTransaction = await Transaction.create({
      id: randomId,
      amount,
      description,
      date,
      category,
    });
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get single transaction
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      res.status(404).json({ error: 'Transaction not found' });
    } else {
      res.json(transaction);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
