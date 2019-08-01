using NUnit.Framework;
using EP.WordsMaker.Logic.Models;

namespace Tests
{
	public class WordScoringTests
	{
		[SetUp]
		public void Setup()
		{
			
		}

        [Test]
        [TestCase("�����", ExpectedResult = 50)]
        [TestCase("���", ExpectedResult = 30)]
        public int CorrectComputeScoringTests(string word)
        {
            Rules rul = new Rules();
            return rul.ComputeScoring(word);
        }

        [Test]
        [TestCase("�����", ExpectedResult = 14)]
        [TestCase("���", ExpectedResult = 7)]
        public int CorrectHardScoringTests(string word)
        {
            Rules rul = new Rules();
            return rul.HardScoring(word);
        }

        [Test]
        [TestCase("�����", ExpectedResult = 62)]
        [TestCase("���", ExpectedResult = 30)]
        public int CorrectCountingByLengthScoringTests(string word)
        {
            Rules rul = new Rules();
            return rul.CountingByLength(word);
        }
    }
}