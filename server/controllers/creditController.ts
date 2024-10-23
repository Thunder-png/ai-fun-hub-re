import { Request, Response } from 'express';
import User from '../models/User';

interface AuthRequest extends Request {
  user?: {
    userId: string;
  };
}

export const getCredits = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.user?.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ credits: user.credits });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const purchaseCredits = async (req: AuthRequest, res: Response) => {
  try {
    const { amount } = req.body;
    
    const user = await User.findById(req.user?.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.credits += amount;
    await user.save();

    res.json({ credits: user.credits });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const useCredit = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.user?.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.credits <= 0) {
      return res.status(400).json({ error: 'No credits available' });
    }

    user.credits -= 1;
    await user.save();

    res.json({ credits: user.credits });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};