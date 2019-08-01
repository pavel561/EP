﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EP.WordsMaker.Logic.Models
{
    /// <summary>
    /// Represents <c>Word</c> class.
    /// </summary>
	public class WordObj
	{
        private string _word;
	    //private char[] _letters;
		private Dictionary<char, int> _lettersDict;

		public string String
		{
			get
			{
				return _word;
			}
		}

		/// <summary>
		/// Word length
		/// </summary>
		public int Length
		{
			get
			{
				return _word.Length;
			}
		}
		/// <summary>
		///letters that are in the word, excluding duplicate.
		/// </summary>
		public char[] Letters
		{
			get
			{
				return _lettersDict.Keys.ToArray();
			}
		}
		/// <summary>
		/// Количество букв в слове. Без повторов
		/// </summary>
		public int LettersCount
		{
			get
			{
				return _lettersDict.Keys.ToArray().Length;
			}
		}
		/// <summary>
		/// ctor
		/// </summary>
		/// <param name="word"></param>
		public WordObj(string word)
		{
			_word = word.ToLower();
			_lettersDict = new Dictionary<char, int>();

			foreach(var letter in _word)
			{
				if(_lettersDict.ContainsKey(letter))
				{
					_lettersDict[letter]++;
				}
				else
				{
					_lettersDict.Add(letter, 1);
				}
			}
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="letter"></param>
		/// <returns></returns>
		public bool Contains(char letter)
		{
			return _lettersDict.ContainsKey(letter);
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="letter"></param>
		/// <returns></returns>
		public int CharCount(char letter)
		{
			if(_lettersDict.ContainsKey(letter))
			{
				return _lettersDict[letter];
			}
			else
			{
				return 0;
			}
		}
	}
}
